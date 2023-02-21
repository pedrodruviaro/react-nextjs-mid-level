import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ text, ...props }) => {
  return (
    <button className="btn" {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
