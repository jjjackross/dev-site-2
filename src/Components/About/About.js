import { useState } from "react";

import styles from './About.module.css';

import InfoCard from '../InfoCard/InfoCard';

const infoData = require('../../json/about.json')

const About = props => {
    const [currentCard, setCurrentCard] = useState(null)

    const selectCard = (cardNumber) => {
        setCurrentCard(cardNumber);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h1>JACK ROSS</h1>
                    <h2>FULL STACK WEB DEVELOPER</h2>
                    <h3>CHICAGO, IL</h3>
                    <p>I am an aspiring full stack developer with experience in Python, C# and MEAN. I enjoy working in a team and collaborating with others. I am passionate about creating and am always looking to further advance my skill set. I am looking to join a team of passionate developers whom I can both learn from and contribute to.</p>
                </div>
            </div>

            <div className={styles.right}>
                {
                    infoData.map((info, i) => {
                        return <InfoCard info={info} listId={i} currentCard={currentCard} onCardSelect={selectCard}/>
                    })
                }
            </div>
        </div>
    )
}

export default About;