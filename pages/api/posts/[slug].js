import { getPostWithSlug } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const post = await getPostWithSlug(req.query.slug);
        
        res.status(200).json(post);
    }
}

export default handler;