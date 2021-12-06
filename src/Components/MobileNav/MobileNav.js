import react from "react";
import { Link } from "react-router-dom";

import styles from './MobileNav.module.css';

const MobileNav = props => {
    return (
        <nav className={styles.mobileNav}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

            <input type="checkbox" id="toggle" className={styles.input}/>
            <label className={styles.showMenu} for="toggle">
                <div className={styles.btn}>
                    <i className={`material-icons md-36 ${styles.toggleBtn} ${styles.menuBtn}`}>menu</i>
                    <i className={`material-icons md-36 ${styles.toggleBtn} ${styles.closeBtn}`}>close</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">work</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">home</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">email</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">description</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">pets</i>
                </div>
                <div className={styles.btn}>
                    <i className="material-icons md-36">people</i>
                </div>
            </label>
        </nav>
    )
}

export default MobileNav;