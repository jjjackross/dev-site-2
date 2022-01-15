import react from "react";
import { Link } from "react-router-dom";

import styles from './PageNotFound.module.css';

const PageNotFound = props => {
    
    
    return (
        <div className={styles.messsageContainer}>
            <h1>Page not found.</h1>
            <h3><Link to="/" className={styles.backMessage}>&#8678; Back to the home page</Link></h3>
        </div>
    )
}


export default PageNotFound;