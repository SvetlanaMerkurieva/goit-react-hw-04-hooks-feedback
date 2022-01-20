import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
