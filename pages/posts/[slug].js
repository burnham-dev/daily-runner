import PostHeader from '../../components/posts/detail/PostHeader';
import PostContent from '../../components/posts/detail/PostContent';
import PreviewAlert from '../../components/posts/detail/PreviewAlert';
import SocialShare from '../../components/posts/detail/SocialShare';
import BackLink from '../../components/posts/detail/BackLink';

import { getPostWithSlug, getAllSlugs } from '../../lib/util/posts';

const PostDetail = ({ post, preview }) => {
    if(!post) {
        return;
    }

    return (
        <div className="post-detail">
            {preview && <PreviewAlert slug={post.slug} />}
            <PostHeader {...post} />
            <SocialShare title={post.title} />
            <PostContent content={post.content} />
            <SocialShare title={post.title} />
            <BackLink />
        </div>
    )
}

export async function getStaticProps({params, preview = false}) {
    const post = await getPostWithSlug(params.slug, preview);
    
    return {
        props: {
            post, preview
        },
        revalidate: 60*5
    }
}

export async function getStaticPaths() {
    const slugs = await getAllSlugs();
    const paths = slugs?.map(s => 
        ({ 
            params: {
                slug: s.slug.current
            }
        })
    );

    return {
        paths,
        fallback: false
    }
}



export default PostDetail;