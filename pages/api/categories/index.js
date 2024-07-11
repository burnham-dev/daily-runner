import { getCategories } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const categories = await getCategories();

        res.status(200).json(categories)
    }
}

export default handler;