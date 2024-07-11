import { getFeaturedPosts } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const posts = await getFeaturedPosts();
        
        res.status(200).json(posts);
    }
}

export default handler;