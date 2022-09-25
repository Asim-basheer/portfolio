import { useContext, useState } from 'react';
import { workImages } from '../components/data';
import SectionName from '../components/SectionName';
import WorksCard from '../components/WorksCard';
import { ThemeContext } from '../context/ThemeContext';

const Works = () => {
  const [filteredData, setFilteredData] = useState(workImages);

  const { theme } = useContext(ThemeContext);

  const filterHandler = (recent) => {
    if (recent) {
      setFilteredData(workImages.filter((img) => img.recent === true));
    } else {
      setFilteredData(workImages);
    }
  };

  return (
    <section className='works' id='work'>
      <div className='works__content'>
        <SectionName>my works</SectionName>

        <div className='works__controls'>
          <button
            className={`works__btn btn btn--primary ${theme}`}
            onClick={() => filterHandler(false)}
          >
            all
          </button>
          <button
            className={`works__btn btn btn--primary ${theme}`}
            onClick={() => filterHandler(true)}
          >
            recent
          </button>
        </div>
        <div className='works__cards'>
          {filteredData.map((work) => {
            return <WorksCard key={work.id} data={work} theme={theme} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
