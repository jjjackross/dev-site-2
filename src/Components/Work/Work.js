import react from "react";
import styles from './Work.module.css';

const Work = props => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                Work
            </div>

            <div className={styles.right}>
                Loaded
            </div>
        </div>
    )
}


export default Work;