import React, { useState, useEffect, useCallback } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';
import s from './Feedback.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood((prevGood) => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad((prevBad) => prevBad + 1);
    }

    setHasFeedback(true);
  };

  const countTotalFeedback = useCallback(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = useCallback(() => {
    const feedbackTotal = good + neutral + bad;
    if (feedbackTotal > 0) {
      setPercentage(Math.round((good / feedbackTotal) * 100));
    } else {
      setPercentage(0);
    }
  }, [good, neutral, bad]);

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  }, [countTotalFeedback, countPositiveFeedbackPercentage]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className={s.FeedbackWrapper}>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {hasFeedback === false ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};
