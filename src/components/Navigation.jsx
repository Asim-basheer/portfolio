import { useContext } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { ThemeContext } from '../context/ThemeContext';
const Navigation = ({ toggle, setToggle }) => {
  const { theme } = useContext(ThemeContext);

  const links = [
    {
      value: 'home',
    },
    {
      value: 'about',
    },
    {
      value: 'skills',
    },
    {
      value: 'work',
    },
    {
      value: 'contact',
    },
  ];

  return (
    <div className='container'>
      <div
        className={`navigation ${toggle && 'active'} ${
          theme === 'light' && 'light'
        }`}
      >
        <div
          className={`navigation__close-icon ${theme === 'light' && 'light'}`}
          onClick={() => setToggle(false)}
        >
          <AiOutlineCloseSquare />
        </div>
        <div className={`navigation__list`}>
          {links.map(({ value }) => {
            return (
              <a
                href={`#${value}`}
                key={value}
                className={`navigation__link ${theme === 'light' && 'light'}`}
                onClick={() => setToggle(false)}
              >
                {value}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
