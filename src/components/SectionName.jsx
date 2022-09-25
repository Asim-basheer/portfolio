import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SectionName = ({ children, classes = '', ...reset }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h2
      className={`section-name ${classes} ${theme === 'light' && 'light'} `}
      {...reset}
    >
      {children}
    </h2>
  );
};

export default SectionName;
