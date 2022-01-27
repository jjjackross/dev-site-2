import { useState, useEffect } from "react";
import styles from './InfoCard.module.css';

const InfoCard = props => {
    const [showInfo, setShowInfo] = useState(false);
    const onClick = () => {
        // When clicked if this card is currently open sets the selected card to null and closes this card
        if (showInfo === true) {
            props.onCardSelect(null);
            setShowInfo(false);
        }
        // If this card is not the one currently open then opens it and closes the open card
        else {
            props.onCardSelect(props.listId);
            setShowInfo(true);
        }
    }

    // Every time the current card changes closes all cards that arent selected
    useEffect(() => {
        if (props.currentCard != props.listId) {
            setShowInfo(false);
        }
    }, [props.currentCard]);
    
    return (
        // Returns a div that displays data when clicked
        <div className={styles.infoButton} onClick={onClick}>
            <h2>{props.info.title}</h2>
            {
            // Ternary that displays/hides the list items when clicked
            showInfo ?
                <ul>
                    {/* Adds a list item for each item in the array */}
                    {
                        props.info.content.map((bullet, i) => {
                            return <li className={styles.bullet}>{bullet}</li>
                        })
                    }
                </ul>
            // Otherwise show nothing
            : ''
            }
        </div>
    )
}

export default InfoCard;