import { getPaginatedPosts } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const offset = parseInt((req.query.offset || 0), 10);
        const posts = await getPaginatedPosts(offset);

        res.status(200).json(posts)
    }
}

export default handler;