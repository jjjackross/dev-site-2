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
                    <p>I am an aspiring full-stack developer with experience in Python, C# and JavaScript.  I trained at Coding Dojo's Chicago campus, where we learned multiple full stacks.  Since graduating, I have been working as an SEO web developer and have recently picked up ReactJS.  I enjoy working in a team and collaborating with other passionate developers that I can learn from and support.  I have also been working as a freelance videographer and video editor for some time creating marketing and on-line content for a number of clients.</p>
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