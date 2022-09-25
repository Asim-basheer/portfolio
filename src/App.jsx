import { useState, useContext } from 'react';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// context to use theme dark and light
import { ThemeContext } from './context/ThemeContext';
const App = () => {
  const { theme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar setToggle={setToggle} />
      <Navigation toggle={toggle} setToggle={setToggle} />
      <main className={`main ${theme} background`}>
        <Home />
        <div className='container text'>
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
