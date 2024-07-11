import { getSettings } from '../../lib/util/settings';

async function handler(req, res) {
    if(req.method === 'GET') {
        const settings = await getSettings();

        res.status(200).json(settings)
    }
}

export default handler;