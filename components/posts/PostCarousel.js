import Slider from "react-slick";

import CardItem from './CardItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PostCarousel = ({posts}) => {
    const settings = {
      centerMode: true,
      variableWidth: true,
      dots: false,
      infinite: true,
      speed: 300
    };

    return (
        <Slider {...settings} className="carousel">
            {posts.map(post => <CardItem key={post.slug} fixedWidth={true} {...post} />)}
        </Slider>
    );
}

export default PostCarousel;