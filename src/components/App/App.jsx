import { useState, useEffect } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import s from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  const total = useEffect(() => {
    const countTotalFeedback = good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const options = ['good', 'neutral', 'bad'];
  const statistics = { good: good, neutral: neutral, bad: bad };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <Section title="Пожалуйста, оставьте отзыв" />
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {!countTotalFeedback && <Notification message="Отзывов нет" />}
        {countTotalFeedback && (
          <>
            <Section title="Статистика отзывов" />
            <Statistics
              statistics={statistics}
              total={total}
              positivePercentage={positivePercentage}
            />
          </>
        )}
      </header>
    </div>
  );
}
/*class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = Object.values(this.state);
    return Math.round((good[0] / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <Section title="Пожалуйста, оставьте отзыв" />
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {!total && <Notification message="Отзывов нет" />}
          {total && (
            <>
              <Section title="Статистика отзывов" />
              <Statistics
                statistics={statistics}
                total={total}
                positivePercentage={positivePercentage}
              />
            </>
          )}
        </header>
      </div>
    );
  }
}
export default App;*/
