import ContentHome from '../components/ContentHome';
import Social from '../components/Social';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`home ${theme === 'light' && 'light'}`} id='home'>
      <div className='container home__container'>
        <ContentHome theme={theme} />
        <Social location={'home'} />
      </div>
    </section>
  );
};

export default Home;
