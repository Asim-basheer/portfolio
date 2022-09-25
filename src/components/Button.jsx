import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Button = ({
  children,
  variant = 'primary',
  classes = '',
  size = 'lg',
  to = '',
  ...reset
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <a
      className={`btn btn--${variant} ${size} ${classes} ${
        theme === 'light' && 'light'
      }`}
      {...reset}
      href={to}
    >
      {children}
    </a>
  );
};

export default Button;
