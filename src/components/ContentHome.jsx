import Typewriter from 'typewriter-effect';
import Button from './Button';
const ContentHome = () => {
  return (
    <div className='content-home'>
      <h1 className='content-home__heading '>
        Hi👋, <br /> I’m Asim, <br />
        <Typewriter
          options={{
            strings: 'Front-end Developer',
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className='content-home__paragraph'>
        I develop websites that make people’s lives simpler through Web. <br />I
        work with HTML5, CSS3, JavaScript, React.
      </p>
      <div>
        <Button
          to='https://drive.google.com/uc?export=download&id=1eytbtkA6q50sfEf3cTcMn66apqzCibGq'
          download
          target='_blank'
          rel='noreferrer'
        >
          download cv
        </Button>
      </div>
    </div>
  );
};

export default ContentHome;
