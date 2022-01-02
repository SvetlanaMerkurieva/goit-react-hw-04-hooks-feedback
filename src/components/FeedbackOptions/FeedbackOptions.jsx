import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.listButton}>
      {options.map(name => (
        <li>
          <button
            type="button"
            className={s.button}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
