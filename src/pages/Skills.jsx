import SectionName from '../components/SectionName';

import { skillIcons } from '../components/data';

const Skills = () => {
  return (
    <section className='skills'>
      <div className='skills__content'>
        <SectionName>my skills</SectionName>

        <div className='skills__icons'>
          {skillIcons.map(({ key, value }) => {
            return (
              <div
                className={`skills__icon ${key === 'html' && 'html'}`}
                key={key}
              >
                <img src={value} alt='html icon' className='img-fluid-w' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
