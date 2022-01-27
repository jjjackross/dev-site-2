import { useState, useEffect } from "react";
import styles from './InfoCard.module.css';

const InfoCard = props => {
    const [showInfo, setShowInfo] = useState(false);
    const onClick = () => {
        if (showInfo === true) {
            props.onCardSelect(null);
            setShowInfo(false);
        } else {
            props.onCardSelect(props.listId);
            setShowInfo(true);
        }
    }

    useEffect(() => {
        if (props.currentCard != props.listId) {
            setShowInfo(false);
        }
    }, [props.currentCard]);
    
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