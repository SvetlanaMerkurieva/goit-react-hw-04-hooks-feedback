import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import s from './App.module.css';

export default function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };

  const [state, setState] = useState(initialState);

  const onLeaveFeedback = name => {
    setState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  const countTotalFeedbacks = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedbacks();
    return Math.round((state.good / total) * 100);
  };

  const options = Object.keys(state);
  const statistics = Object.entries(state);
  const total = countTotalFeedbacks();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <Section title="Пожалуйста, оставьте отзыв">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {!total && <Notification message="Отзывов нет" />}
        {total && (
          <Section title="Статистика отзывов">
            <Statistics
              statistics={statistics}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </header>
    </div>
  );
}
