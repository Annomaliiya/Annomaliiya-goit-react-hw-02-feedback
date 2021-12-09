import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
    return (<ul className={styles.btnList}>
        <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={goodFeedback}>Good</button></li>
        <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={neutralFeedback}>Neutral</button></li>
        <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={badFeedback}>Bad</button></li>
    </ul>)
};

export default FeedbackOptions;