import { useState } from 'react';
import { useForm } from 'react-hook-form';

import classes from './ContactForm.module.scss';

const ContactForm = () => {
    // Sets up basic data state
    const [formData, setFormData] = useState() 
        
    // Sets up our form states 
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [error, setError] = useState()
          
    // Prepares the functions from react-hook-form
    const { register, handleSubmit, formState: { errors }  } = useForm()
    
    // Function for handling the form submission
    const onSubmit = async data => {
        setIsSubmitting(true)
        
        setFormData(data)
              
        try {
          const response = await fetch('/api/save-message', {
            method: 'POST',
           body: JSON.stringify(data),
           type: 'application/json'
          });

          if (!response.ok) {// or check for response.status
            const error = await response.json();
            throw new Error(error);
            }
          setIsSubmitting(false);
          setError(null);
          setHasSubmitted(true);

        } catch (err) {
            setError(err.message);
            setIsSubmitting(false);
            setHasSubmitted(true);
        }
    }

    function backToForm() {
        setIsSubmitting(false);
        setError(null);
        setHasSubmitted(false);
    }
  
    if (isSubmitting) {
      // Returns a 'Submitting comment' state if being processed
      return <h3>Sending message...</h3>
    }
    if(hasSubmitted && error) {
        return (
            <>
              <h3>Something went wrong.</h3>
              {error} <br />
              <button onClick={() => backToForm()}>Go back</button>
            </>
          )
    }
    if (hasSubmitted && !error) {
      // Returns the data that the user submitted for them to preview after submission
      return (
        <>
          <h3>We've received your message!</h3>
          <p>We will be in touch with you shortly.</p>
          <div className={classes.success_message}>
              First Name: {formData.firstName} <br />
              Last Name: {formData.lastName} <br />
              Email: {formData.email} <br />
              Message: {formData.message}
          </div>
        </>
      )
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <input type='hidden' name='form-name' value='contact-form' />
        <label htmlFor='firstName'>
            First Name
            {errors && errors.firstName && <span className={classes.validation_message}>This is a required field</span>}
            <input {...register('firstName', { required: true })}  />
        </label>
        <label htmlFor='lastName'>
            Last Name
            {errors && errors.lastName && <span className={classes.validation_message}>This is a required field</span>}
            <input {...register('lastName', { required: true })}  />
        </label>
        <label htmlFor='email'>
            Email
            {errors && errors.email && <span className={classes.validation_message}>Please format email correctly</span>}
            <input
            {...register('email', {
                required: true,
                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            })}
            />
        </label>
        <label htmlFor='message'>
            Message
            {errors && errors.message && <span className={classes.validation_message}>Please enter a message</span>}
            <textarea rows='4' {...register('message', { required: true })}/>
        </label>

        <button type='submit' className={classes.submit}>Send Message</button>
    </form>
  )
}

export default ContactForm;