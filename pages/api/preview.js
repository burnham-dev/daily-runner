import { getPostWithSlug } from '../../lib/util/posts';

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default async function enablePreview(req, res) {
    if(previewSecret !== req.query.secret || !req.query.slug) {
        return res.status(401).json({message: 'Invalid token'});
    }

    const post = await getPostWithSlug(req.query.slug);

    if(!post) {
        return res.status(401).json({message: 'Invalid slug'});
    }

    res.setPreviewData({});
    res.writeHead(307, { Location: `/posts/${post.slug}`});
    res.end();
}