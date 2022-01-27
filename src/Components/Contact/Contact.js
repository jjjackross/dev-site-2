import {useState} from "react";
import { Link } from "react-router-dom";

import styles from './Contact.module.css';

const Contact = props => {
    // Keeps track of whether the form or form submitted message should be showing
    const [showThankYou, setShowThankYou] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.contactTitle}>Contact Me</h1>
                {/* A ternary operator to show either the form or form submitted message */}
                {
                    showThankYou ?
                    // Form submitted message
                    <div className={styles.thankYouMessage}>
                        <h3>Thank you for submitting the form!</h3>
                        <Link to="/" className={styles.backMessage}>&#10229; Back to the home page</Link><Link to="/work" className={styles.backMessage}>&#10229; View some of my work</Link>
                    </div> :
                    // Contact Form
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
            
            {/* Commented out the right column since we dont need it at the moment */}
            {/* <div className={styles.right}></div> */}
        </div>
    )
}

export default Contact;