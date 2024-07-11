import CardItem from './CardItem';
import LoadMoreButton from './LoadMoreButton';

import classes from './PostList.module.scss';

const PostList = ({ pages = [], setSize, size, hitEnd, isLoading }) => {
    return (
        <section className={`${classes.postList} section grey`}>
            <div className="container">
                <div className="grid">
                    {pages.map(page => page.map(post => (
                        <CardItem key={post.slug} {...post} />
                    )))}
                </div>
                <LoadMoreButton setSize={setSize} size={size} hitEnd={hitEnd} isLoading={isLoading} />
            </div>
        </section>
    );
}

export default PostList;