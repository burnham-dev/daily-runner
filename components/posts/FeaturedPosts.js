import PostCarousel from './PostCarousel';

import classes from './FeaturedPosts.module.scss';

const FeaturedPosts = ({title, posts}) => {
    return (
        <section className={classes.featured_posts}>
          <div className="container">
            <h2 className={classes.title}>
              <span>{title}</span>
            </h2>
          </div>
        <PostCarousel posts={posts} />
        </section>
      );
}

export default FeaturedPosts;