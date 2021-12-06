import react from "react";
import styles from './Contact.module.css';

const Contact = props => {
    return (
        <div className={styles.container}>
            <h1>Contact Me</h1>
            <form>
                <strong><label>Name</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label>Email</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label>Phone</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label>How did you hear about me?</label></strong>
                <input type="text" className={styles.input}/>
                <strong><label>Message</label></strong>
                <input type="textarea" className={styles.input}/>
                <input type="submit" className={styles.input}/>
            </form>
        </div>
    )
}


export default Contact;