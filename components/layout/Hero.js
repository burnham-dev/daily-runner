import Image from 'next/image';

import { urlFor } from '../../lib/util/posts';

import classes from './Hero.module.scss';

const Hero = ({ heroImage }) => {
    return (
        <div className={`${classes.hero} image-container`} style={{backgroundImage: heroImage ? `url(${urlFor(heroImage).url()})` : ''}}>
        </div>
    );
}

export default Hero;