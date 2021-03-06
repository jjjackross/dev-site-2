// We use useLocation to access our URL
import { Link, useLocation } from "react-router-dom";

import styles from './Nav.module.css';

// Imports our SVGs as components
import { ReactComponent as Github } from '../../img/github.svg';
import { ReactComponent as Linkedin } from '../../img/linkedin.svg';

const Nav = props => {
    // Uses the useLocation hook to return the current URL pathname when called.
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <nav className={styles.desktopNavContainer}>
            <div className={styles.desktopNav}>
                {/* Group of page links at the top */}
                <div className={styles.navGroup}>
                    <Link className={`${styles.mainNavLink} ${usePathname() === '/' ? styles.currentPage : ''}`} to="/">HOME</Link>
                    <Link className={`${styles.mainNavLink} ${usePathname() === '/work' ? styles.currentPage : ''}`} to="/work">WORK</Link>
                    <Link className={`${styles.mainNavLink} ${usePathname() === '/contact' ? styles.currentPage : ''}`} to="/contact">CONTACT</Link>
                </div>

                {/* Group of external links at the bottom */}
                <div className={styles.navGroup}>
                    <a className={styles.mainNavLink} href="#" >RESUME</a>
                    <div className={styles.iconLinks}>
                        <Github className={styles.iconLink} onClick={(e) => window.open('https://github.com/jjjackross', '_blank')}/>
                        <Linkedin className={styles.iconLink} onClick={(e) => window.open('https://www.linkedin.com/in/jjjackross/', '_blank')}/>
                    </div>
                </div>
            </div>
            {/* The styled vertical line that looks like it's holding our whole Nav together */}
            <div className={styles.verticalLine} />
        </nav>
    )
}

export default Nav;