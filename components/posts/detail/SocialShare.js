import { useRouter } from 'next/router'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaRedditAlien } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import classes from './SocialShare.module.scss';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton
  } from "react-share";

const iconSettings = {
    size: '1em',
    color: '#fff'
}

const SocialShare = ({title}) => {
    const router = useRouter();
    const pageUrl = process.env.BASE_URL + router.asPath;
    
    return (
        <div className={classes.social}>
            <div className={classes.social_icons}>
                <FacebookShareButton url={pageUrl}>
                    <div className={classes.icon}>
                        <FaFacebookF {...iconSettings} />
                    </div>
                </FacebookShareButton>

                <LinkedinShareButton url={pageUrl}>
                    <div className={classes.icon}>
                        <FaLinkedinIn {...iconSettings} />
                    </div>
                </LinkedinShareButton>

                <TwitterShareButton url={pageUrl}>
                    <div className={classes.icon}>
                        <FaTwitter {...iconSettings} />
                    </div>
                </TwitterShareButton>

                <RedditShareButton url={pageUrl}>
                    <div className={classes.icon}>
                        <FaRedditAlien {...iconSettings} />
                    </div>
                </RedditShareButton>

                <EmailShareButton subject={`Check out this article`} body={title} url={pageUrl}>
                    <div className={classes.icon}>
                        <HiOutlineMail {...iconSettings} />
                    </div>
                </EmailShareButton>
            </div>
        </div>

    );
}

export default SocialShare;