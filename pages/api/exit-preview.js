export default function exitPreview(req, res) {
    const slug = req.query.slug;
    const location = slug ? `/posts/${req.query.slug}` : '/';
    console.log(location);
    console.log(slug);

    res.clearPreviewData();
    res.writeHead(307, { Location: location });
    res.end();
}