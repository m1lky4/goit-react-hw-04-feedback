import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const Statistics = ({good, neutral, bad, total, percentage}) => {
  return (
    <ul className={s.FeedbackList}>
      <li>
        <span className={s.FeedbackSpan}>Good: {good}</span>
      </li>
      <li>
        <span className={s.FeedbackSpan}>Neutral: {neutral}</span>
      </li>
      <li>
        <span className={s.FeedbackSpan}>Bad: {bad}</span>
      </li>
      <li>
        <span className={s.FeedbackSpan}>Total: {total}</span>
      </li>
      <li>
        <span className={s.FeedbackSpan}>Positive feedback: {Math.floor(percentage)}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
