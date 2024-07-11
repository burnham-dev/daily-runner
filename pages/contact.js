import BlockContent from '@sanity/block-content-to-react';
import Hero from '../components/layout/Hero';
import ContactForm from '../components/forms/ContactForm';

import { getContactPageSettings } from '../lib/util/settings.js';

const ContactPage = ({ page }) => {
    return (
        <div className="contact-page">
            <section className="section">
                <Hero heroImage={page.heroImage} />
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div class="column_1_2">
                            <h1>{page.headline}</h1>
                            <BlockContent blocks={page.content} />
                        </div>
                        <div class="column_1_2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const page = await getContactPageSettings();
    
    return {
        props: {
            page
        },
        revalidate: 60*60
    }
  }

export default ContactPage;