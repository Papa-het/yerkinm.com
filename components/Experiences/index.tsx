import * as React from 'react';

import styles from './experiences.module.scss';

const list = [
  {
    logo: '/icons/rocketfirm.svg',
    company: 'Rocketfirm',
    title: 'Front-end Developer',
    description: '',
    from: 'Июль 2019',
    to: 'наст. время',
  },
  {
    logo: '/icons/darkandala.svg',
    company: 'ТОО Даркандала',
    title: 'Front-end Developer',
    description: `Разрабатывал интерфейс и функционал оцифровки полей для геопортала компаний. Работал с картами и геоданными, а также с библиотекой Leaflet. Стек: React, Redux, Express, Leaflet.`,
    from: 'Сентябрь 2019',
    to: 'Май 2020',
  },
];

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <p className={styles.experiencesTitle}>Опыт работы</p>
      <ul className={styles.list}>
        {list.map((el, i) => (
          <li key={i} className={styles.item}>
            <img className={styles.logo} src={el.logo} alt="logo" />
            <div className={styles.info}>
              <p className={styles.date}>
                {el.from} - {el.to}
              </p>
              <p className={styles.title}>{el.title}</p>
              <p className={styles.company}>{el.company}</p>
              <p className={styles.description}>{el.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Experiences };
