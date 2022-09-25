import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const WorksCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { name, img, live, code, tags } = data;
  return (
    <article className={`'works-card'`}>
      <div
        className={`works-card__content  ${
          theme === 'dark' ? 'glow-on-hover' : 'works-card--border-white'
        }`}
      >
        <div className='works-card__img'>
          <img src={img} alt={name} className='img-fluid-w' />
        </div>
        <h3 className='works-card__name ttc'>{name}</h3>

        <div className='works-card__tags'>
          {tags.map((tag) => {
            return (
              <span className='works-card__tag ttc' key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div className='works-card__links'>
        <a
          href={code}
          rel='noreferrer'
          className={`works-card__link btn btn--primary ${theme}`}
          target='_blank'
        >
          source code
        </a>
        <a
          href={live}
          rel='noreferrer'
          className={`works-card__link btn btn--primary ${theme}`}
          target='_blank'
        >
          demo
        </a>
      </div>
    </article>
  );
};

export default WorksCard;
