import Head from 'next/head';

import PageTitle from '../../components/layout/PageTitle';
import PostList from '../../components/posts/PostList';

import { getDataPages } from '../../lib/util/swr';
import { getPaginatedPosts, getCategories } from '../../lib/util/posts';


function AllPostsPage({ posts, categories, settings }) {
    const { data, size, error, setSize, hitEnd } = getDataPages('/api/posts');

    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === "undefined");

    if (error) return `An error has occurred: ${error}`;

    return (
        <>
            <Head>
                <title>The Daily Runner | Post Archive</title>
                <meta name='description' content='Dig through the archives of The Daily Runner for information on all things involving the life of a runner.' />
            </Head>
            <div className="post-archive">
                <PageTitle title="Browse the Archives" />
                <PostList pages={data || [posts]} setSize={setSize} size={size} hitEnd={hitEnd} isLoading={isLoadingInitialData || isLoadingMore} />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getPaginatedPosts();
    const categories = await getCategories();
    
    return {
        props: {
            posts,
            categories
        },
        revalidate: 60*60
    }
}

export default AllPostsPage;