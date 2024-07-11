import Image from 'next/image';
import Hero from '../../layout/Hero';

import { urlFor } from '../../../lib/util/posts';

import classes from './PostHeader.module.scss';

const PostHeader = ({ title, subtitle, featuredImage, author, date, categories }) => {
    let counter = 0;
    let categoryString;
    
    if(categories) {
        categoryString = categories.map(category => {
            counter++;
            if (counter === categories.length) {
                return category.title;
            }
            return category.title + ', ';
        });
    } 

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className={classes.post_header}>
            <Hero heroImage={featuredImage} />
            <div className={classes.post_header_content}>
                <h1 className={classes.post_title}>{title}</h1>
                <h2 className={classes.post_subtitle}>{subtitle}</h2>
                {author && (
                    <div className={classes.post_author}>
                        <div className="image-container avatar sm">
                            <Image
                            src={urlFor(author.avatar).width(80).height(80).url()}
                            alt={author.name}
                            width={80}
                            height={80}
                            layout="responsive"
                            />
                        </div>
                        <div>
                            <p>By {author.name} &nbsp; |  &nbsp; {formattedDate} {categories && <> &nbsp; | &nbsp; {categoryString}</>}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default PostHeader;