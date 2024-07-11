import { useState, useEffect } from 'react';
import FeaturedSlider from '../components/posts/FeaturedSlider';
import FeaturedPosts from '../components/posts/FeaturedPosts';

import { getRecentPostsInCategories, getFeaturedPosts } from '../lib/util/posts';

const categories = [
  { title: 'Personal Stories', slug: 'personal-stories'},
  { title: 'Tips & Tricks', slug: 'tips-and-tricks'},
  { title: 'Recipes', slug: 'recipes'},
  { title: 'Running Gear', slug: 'running-gear'},
  { title: 'Running Technique', slug: 'running-technique'}
];

const HomePage = ({initialFeaturedPosts, initialFeaturedSliderPosts}) => {
  const [featuredPosts, setFeaturedPosts] = useState(initialFeaturedPosts);
  const [featuredSliderPosts, setFeaturedSliderPosts] = useState(initialFeaturedSliderPosts);
  
  const loadPosts = async (category) => {
    const response = await fetch(`${process.env.BASE_URL}/api/categories/${category.slug}`);
    const posts = await response.json();
    
    return posts;
  };

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/posts/featured`)
      .then(response => response.json())
      .then(data => setFeaturedSliderPosts(data));

    Promise.allSettled(categories.map(category => loadPosts(category)))
    .then(results => {
      const loadedCategoryArray = results.map(result => result.value);

      setFeaturedPosts(loadedCategoryArray);
    });
  }, []);

  return (
    <>
      <FeaturedSlider posts={featuredSliderPosts} />
      {featuredPosts.map((category, index) => <FeaturedPosts key={categories[index].slug} title={categories[index].title} posts={category.posts} />)}
    </>
    
  );
}

export async function getStaticProps() {
  const initialFeaturedPosts = await getRecentPostsInCategories(categories);
  const initialFeaturedSliderPosts = await getFeaturedPosts();
  
  return {
      props: {
        initialFeaturedPosts,
        initialFeaturedSliderPosts
      },
      revalidate: 60*15
  }
}


export default HomePage;