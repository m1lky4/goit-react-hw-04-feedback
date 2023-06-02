import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keysToRender = options.filter(key => key !== 'total' && key !== 'percentage' && key !== 'hasFeedback');

  return (
    <div>
      {keysToRender.map((key) => (
        <button key={key} className={s.FeedbackBtn} onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
