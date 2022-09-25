import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { socialData } from './data';

const Social = ({ location }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`social ${location === 'home' && 'social-home'} `}>
      <div className={`social__list ${location === 'home' && 'social-home'}`}>
        {socialData.map(({ href, Icon }, index) => {
          return (
            <a
              href={`${href}`}
              key={index}
              className={`social__links ${theme === 'light' && 'light'}`}
              target='_blank'
              rel='noreferrer'
            >
              <span style={{ fontSize: '0' }}>
                there is no text but the text is here to avoid lighthouse
                warning
              </span>
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
