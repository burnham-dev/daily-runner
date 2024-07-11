import Link from 'next/link';

import classes from './BackLink.module.scss';

const BackLink = () => {
    return (
        <div className={classes.back}>
            <Link href='/posts'>Back To All Posts</Link>
        </div>
    );
}

export default BackLink;