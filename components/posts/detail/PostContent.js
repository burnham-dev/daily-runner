import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { urlFor } from '../../../lib/util/posts';

import classes from './PostContent.module.scss';

const serializers = {
    types: {
        image: ({node}) => {
            return (
                <div className={classes.image}>
                    <Image
                    src={urlFor(node).width(800).height(500).url()}
                    alt={node.alt}
                    width={600}
                    height={400}
                    layout="intrinsic"
                    />
                    <div className={classes.image_caption}>
                        {node.alt}
                    </div>
                </div>
            )
        }
    }
}

const PostContent = ({ content }) => {
    return (
        <div className={classes.post_content}>
            <BlockContent imageOptions={{w: 700, h:350, fit: 'max'}} serializers={serializers} blocks={content} />
        </div>
    );
}

export default PostContent;