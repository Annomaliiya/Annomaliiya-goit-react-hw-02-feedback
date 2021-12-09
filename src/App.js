import { Component } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
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
    const renderStatisticsSection =
      total ?
        <Statistics good={this.state.good
        } neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positiveFeedback} />
        : <Notification message="There is no feedback"></Notification>;

    return (
      <>
        <Section className={styles.section} title="Please leave feedback" >
          <FeedbackOptions goodFeedback={this.goodFeedback}
            neutralFeedback={this.neutralFeedback}
            badFeedback={this.badFeedback}
          />
        </Section>
        <Section className={styles.section} title="Statistics">
          {renderStatisticsSection}
        </Section>      </>
    )
  };
}


export default App;
