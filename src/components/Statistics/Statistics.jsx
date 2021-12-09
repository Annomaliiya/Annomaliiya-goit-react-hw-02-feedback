
import styles from './Statistics.module.css'

const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => {
    return (
        <>
            {total ? (
                <ul className={styles.statisticsList}>
                    <li className={styles.item}><b>Good:</b>{good}</li>
                    <li className={styles.item}><b>Neutral:</b>{neutral}</li>
                    <li className={styles.item}><b>Bad:</b>{bad}</li>
                    <li className={styles.item}><b>Total:</b>{total}</li>
                    <li className={styles.item}><b>Positive feedback:</b>{total ? positiveFeedback : 0}%</li>
                </ul >) : (<p className={styles.text}>No feedback given</p>)}
            </>
    )}

export default Statistics;