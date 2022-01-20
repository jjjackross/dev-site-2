import react from "react";
import { Link } from "react-router-dom";

import styles from './PageNotFound.module.css';

const PageNotFound = props => {
    
    
    return (
        <div className={styles.messsageContainer}>
            <h1>Page not found.</h1>
            <Link to="/" className={styles.backMessage}>&#10229; Back to the home page</Link><Link to="/work" className={styles.backMessage}>&#10229; View some of my work</Link>
        </div>
    )
}


export default PageNotFound;