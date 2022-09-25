import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Navbar = ({ setToggle }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = (mood) => {
    if (mood === 'light') {
      localStorage.setItem('theme', mood);
      setTheme(mood);
    } else if (mood === 'dark') {
      localStorage.setItem('theme', mood);
      setTheme(mood);
    }
  };
  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className='container navbar__container'>
        <a href='#home' className='navbar__logo'>
          asim basheer
        </a>

        <div className='navbar__burger-icon'>
          <GiHamburgerMenu onClick={() => setToggle(true)} />
          <div>
            {theme === 'dark' ? (
              <BsFillSunFill onClick={() => changeTheme('light')} />
            ) : (
              <BsFillMoonFill onClick={() => changeTheme('dark')} />
            )}
          </div>
        </div>

        {/* <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href='#home' className='navbar__link'>
              home
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#about' className='navbar__link'>
              about
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#skills' className='navbar__link'>
              skills
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#works' className='navbar__link'>
              works
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#contact' className='navbar__link'>
              contact
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
