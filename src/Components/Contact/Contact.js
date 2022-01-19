import react, {useState} from "react";
import { Link } from "react-router-dom";

import styles from './Contact.module.css';

const Contact = props => {
    const [showThankYou, setShowThankYou] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Contact Me</h1>
                {
                    showThankYou ?
                    <div className={styles.thankYouMessage}>
                        <h3>Thank you for submitting the form!</h3>
                        <Link to="/" className={styles.backMessage}>&#10229; Back to the home page</Link>
                    </div> :
                    <form name="contact-me-form" method="POST" data-netlify="true" onSubmit={onSubmit}>
                        <input type="hidden" name="form-name" value="contact-me-form" />
                        <strong><label className={styles.label}>Name</label></strong>
                        <input type="text" className={styles.input} name="name"/>
                        <strong><label className={styles.label}>Email</label></strong>
                        <input type="text" className={styles.input} name="email"/>
                        <strong><label className={styles.label}>How did you hear about me?</label></strong>
                        <input type="text" className={styles.input} name="reference"/>
                        <strong><label className={styles.label}>Message</label></strong>
                        <textarea rows="10" className={styles.input} name="message"></textarea>
                        <input type="submit" className={styles.input}/>
                    </form>
                }
            </div>

            {/* <div className={styles.right}></div> */}
        </div>
    )
}


export default Contact;