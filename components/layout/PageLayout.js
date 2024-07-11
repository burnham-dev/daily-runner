import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import MainNavigation from './MainNavigation';
import Footer from './Footer';

import { getData } from '../../lib/util/swr';

const PageLayout = ({children}) => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ settings, setSettings ] = useState({
        logo: ''
    });
    const { data, error } = getData('/api/settings');

    if(error) { console.log(error) }

    useEffect(() => {
        if(data) {
            setSettings({
                logo: data.logo
            });
        }
    }, [data]);

    const toggleMenu = () => {
        document.body.classList.toggle('no-scroll');
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        document.body.classList.remove('no-scroll');
        setIsMenuOpen(false);
    }

    useEffect(() => {
        router.events.on('routeChangeStart', closeMenu);

        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);

    return (
        <div className={isMenuOpen ? 'menuIsOpen' : ''}>
            <MainNavigation logo={settings.logo} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default PageLayout;