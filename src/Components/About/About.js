import react from "react";
import styles from './About.module.css';

const About = props => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h1>JACK ROSS</h1>
                    <h2>FULL STACK WEB DEVELOPER</h2>
                    <h3>CHICAGO, IL</h3>
                    <p>I am an aspiring full stack developer with experience in Python, C# and MEAN. I enjoy working in a team and collaborating with others. I am passionate about creating and am always looking to further advance my skill set. I am looking to join a team of passionate developers whom I can both learn from and contribute to.</p>
                </div>

                <div className={styles.threeJS} />
            </div>

            <div className={styles.right}>
                <p>4 qna</p>
            </div>
        </div>
    )
}


export default About;