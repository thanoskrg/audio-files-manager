import React from 'react';
import { func, string } from 'prop-types';

const Button = ({ children, className, onClick }) => (
  <button
    className={`f6 fw6 pv1 ph3 flex items-center br2 bn pointer dim ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: string,
  onClick: func
};

export default Button;