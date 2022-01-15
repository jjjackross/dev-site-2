import react from "react";
import styles from './Contact.module.css';

const Contact = props => {
    return (
        <div className={styles.container}>
            <h1>Contact Me</h1>
            <form>
                <strong><label className={styles.label}>Name</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label className={styles.label}>Email</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label className={styles.label}>How did you hear about me?</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label className={styles.label}>Message</label></strong>
                <textarea rows="10" className={styles.input}></textarea>
                <input type="submit" className={styles.input}/>
            </form>
        </div>
    )
}


export default Contact;