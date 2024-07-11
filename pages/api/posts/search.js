import { searchPosts } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const posts = await searchPosts(req.query.s);
        
        res.status(200).json(posts);
    }
}

export default handler;