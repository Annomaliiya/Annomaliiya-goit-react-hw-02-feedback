import { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  goodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const positiveFeedback = good / total * 100;
    return positiveFeedback;
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (

      <>
        <section className={styles.feedback}>
          <h1 className={styles.title}>Please leave feedback</h1>
          <ul className={styles.btnList}>
            <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={this.goodFeedback}>Good</button></li>
            <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={this.neutralFeedback}>Neutral</button></li>
            <li className={styles.btnListItem}><button className={styles.btn} type="button" onClick={this.badFeedback}>Bad</button></li>
          </ul>
          <h2 className={styles.subTitle}>Statistics</h2>
          <ul className={styles.statisticsList}>
            <li className={styles.item}>Good:{this.state.good}</li>
            <li className={styles.item}>Neutral:{this.state.neutral}</li>
            <li className={styles.item}>Bad:{this.state.bad}</li>
            <li className={styles.item}>Total:{total}</li>
            <li className={styles.item}>Positive feedback:{positiveFeedback}%</li>
          </ul>
        </section>
      </>
    )
  };
}


export default App;
