import { getCategoryPosts } from '../../../lib/util/posts';

async function handler(req, res) {
    if(req.method === 'GET') {
        const posts = await getCategoryPosts({ slug: req.query.slug });

        res.status(200).json(posts);
    }
}

export default handler;