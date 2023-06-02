import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h4 className={s.FeedbackTitle}>{title}</h4>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
