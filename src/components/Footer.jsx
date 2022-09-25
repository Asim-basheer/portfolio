import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Social from './Social';

const Footer = () => {
  const createdBy = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer text ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Social />
      <div className='mb'></div>
      <p className='ttc'>
        create by <span>asim basheer</span> | <br /> ©️ {createdBy} all right
        reserved
      </p>
    </footer>
  );
};

export default Footer;
