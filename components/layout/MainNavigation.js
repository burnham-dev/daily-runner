import Image from 'next/image';
import Link from 'next/link';

import MenuBtn from './MenuBtn';
import { urlFor } from '../../lib/util/posts';
import classes from './MainNavigation.module.scss';

const MainNavigation = ({ logo, isMenuOpen, toggleMenu }) => {
    return (
        <>
            <header className={`${classes.header} ${isMenuOpen ? classes.menuIsOpen : ''}`}>
                <div className="container">
                    <div className={classes.header_cols}>
                        <Link href="/">
                            <span className={classes.header_logo}>
                                <Image
                                    src="/images/tdr-logo-r.png"
                                    alt={'The Daily Runner logo'}
                                    width={159}
                                    height={47}
                                />
                            </span>
                        </Link>
                        <nav>
                            <MenuBtn toggleMenu={toggleMenu} />
                            <ul>
                                <li><Link href="/">Featured</Link></li>
                                <li><Link href="/posts">Browse</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default MainNavigation;