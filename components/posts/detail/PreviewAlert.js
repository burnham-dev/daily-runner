import Link from 'next/link';

import classes from './PreviewAlert.module.scss';

const PreviewAlert = ({slug}) => {
    return (
        <div className={classes.alert}>
            <p>
                You are viewing this page in Preview Mode. &nbsp;
                <Link href={slug ? `/api/exit-preview?slug=${slug}` : '/api/exit-preview'}>Exit Preview Mode</Link>
            </p>
        </div>
    );
}

export default PreviewAlert;