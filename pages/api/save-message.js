// This Next.js template already is configured to write with this Sanity Client
import { formClient } from '../../lib/config/sanity'

export default async function saveMessage(req, res) {
    const { firstName, lastName, email, message} = JSON.parse(req.body);
    let date = new Date();

    const messageObj = {
        _type: 'submission',
        date: date.toISOString(),
        firstName,
        lastName,
        email,
        message
        }

    try {
        await formClient.create(messageObj);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(`Couldn't send message.`)
    }
        
    return res.status(200).json({ messageObj })
}