import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../lib/util/posts';

import classes from './CardItem.module.scss';

const CardItem = ({ fixedWidth = false, title, featuredImage, author, excerpt, date, slug }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
            <div className={fixedWidth ?   `${classes.fixedWidth} ${classes.card}` : classes.card}>
        <Link href={`/posts/${slug}`}>
                <div className={classes.card_top}>
                    {featuredImage && <div className="image-container">
                        <Image
                        src={urlFor(featuredImage).url()}
                        alt={title}
                        width={500}
                        height={250}
                        />
                    </div>}
                    <div className={classes.card_details}>
                        <h3 className={classes.card_title}>{title}</h3>
                        {excerpt && <p>{excerpt}</p>}
                    </div>
                </div>
                <div className={classes.card_meta}>
                    {author && <p className={classes.author_name}>By {author.name}</p>}
                    <p className={classes.date}>{formattedDate}</p>
                </div>
                </Link>
            </div>
    );
}

export default CardItem;