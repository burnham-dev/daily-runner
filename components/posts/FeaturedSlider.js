import Slider from "react-slick";

import Slide from './Slide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './FeaturedSlider.module.scss';

const FeaturedSlider = ({posts}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 6000,
    };

    return (
        <div className={classes.featured_slider}>
            <Slider {...settings}>
                {posts.map(post => <Slide key={post.slug} {...post} />)}
            </Slider>
        </div>
    );
}

export default FeaturedSlider;