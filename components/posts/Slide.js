import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../../lib/util/posts';

import classes from './Slide.module.scss';

const Slide = ({ featuredImage, title, date, excerpt, slug }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    ////// --------------  layout="fill" pulling too big of image --------------- ////////
    ////// -------------------------  find other method ------------------------- ////////

    return (
        <div className={classes.slide}>
            {featuredImage && <div className={classes.slide_image}>
                <Image
                src={urlFor(featuredImage).url()}
                alt={title}
                width={2400}
                height={1300}
                layout="fill"
                />
            </div>}
            <div className={classes.slide_content}>
                <div className={classes.slide_text}>
                    <p className={classes.date}>{formattedDate}</p>
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <Link href={`/posts/${slug}`}>
                        <a className="underline-link">Read More</a>
                    </Link>
                </div>  
            </div>  
        </div>
    );
}

export default Slide;