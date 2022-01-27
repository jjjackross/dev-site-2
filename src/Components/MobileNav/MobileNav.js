// This circular nav is a modified version of the original: https://codepen.io/Kapilnemo/pen/gMgLWr/?editors=1100import react from "react";

// Instead of using <Link> this menu uses useHistory to redirect when a div is clicked
import { useHistory } from "react-router-dom";

import styles from './MobileNav.module.css';

const MobileNav = props => {
    const history = useHistory();

    return (
        <nav className={styles.mobileNav}>
            {/* Imports some icons for use */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

            {/* Hidden input checkbox for use in CSS animation */}
            <input type="checkbox" id="toggle" className={styles.input}/>
            <label className={styles.showMenu} for="toggle">
                {/* Our menu hamburger and close buttons */}
                <div className={styles.btn}>
                    <i className={`material-icons md-36 ${styles.toggleBtn} ${styles.menuBtn}`}>menu</i>
                    <i className={`material-icons md-36 ${styles.toggleBtn} ${styles.closeBtn}`}>close</i>
                </div>
                {/* The first 3 go to pages on this site */}
                <div onClick={(e) => history.push("/work")} className={styles.btn}>
                    <i className="material-icons md-36"><p className={styles.mobileNavText}>Work</p></i>
                </div>
                <div onClick={(e) => history.push("/")} className={styles.btn}>
                    <i className="material-icons md-36">home</i>
                </div>
                <div onClick={(e) => history.push("/contact")} className={styles.btn}>
                    <i className="material-icons md-36"><p className={styles.mobileNavText}>Contact</p></i>
                </div>
                {/* The second 3 go to external links */}
                <div onClick={(e) => window.open('https://www.linkedin.com/in/jjjackross/', '_blank')} className={styles.btn}>
                    <i className="material-icons md-36"><p className={styles.mobileNavText}>LinkedIn</p></i>
                </div>
                <div onClick={(e) => window.open('#', '_blank')} className={styles.btn}>
                    <i className="material-icons md-36"><p className={styles.mobileNavText}>Resume</p></i>
                </div>
                <div onClick={(e) => window.open('https://github.com/jjjackross', '_blank')} className={styles.btn}>
                    <i className="material-icons md-36"><p className={styles.mobileNavText}>GitHub</p></i>
                </div>
            </label>
        </nav>
    )
}

export default MobileNav;