import react, { useState } from "react";
import styles from './InfoCard.module.css';

const InfoCard = props => {
    const [showInfo, setShowInfo] = useState(false);
    const onClick = () => {
        if (showInfo) { setShowInfo(false) } else {
            setShowInfo(true);
        }
    }
    
    return (
        <div className={styles.infoButton} onClick={onClick}>
            <h2>{props.info.title}</h2>
            {
                showInfo ?
                <ul>
                    {
                        props.info.content.map((bullet, i) => {
                            return <li className={styles.bullet}>{bullet}</li>
                        })
                    }
                </ul>
                 : ''
            }
        </div>
    )
}

export default InfoCard;