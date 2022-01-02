import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'Хорошо':
        setGood(prevState => prevState + 1);
        break;
      case 'Нейтрально':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Плохо':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedbacks();
    return Math.round((good / total) * 100);
  };

  const options = ['Хорошо', 'Нейтрально', 'Плохо'];
  const statistics = Object.entries({
    Хорошо: good,
    Нейтрально: neutral,
    Плохо: bad,
  });
  const total = countTotalFeedbacks();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <Section title="Пожалуйста, оставьте отзыв" />
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
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
