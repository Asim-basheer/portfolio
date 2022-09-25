import SectionName from '../components/SectionName';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__content'>
        <SectionName classes='text-center'>about me</SectionName>

        <p className='about__paragraph'>
          Highly motivated and talented individual looking to obtain a position
          that will enable me to use my organizational skills, educational
          background, and ability to work well with people.
        </p>
      </div>
    </section>
  );
};

export default About;
