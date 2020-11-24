import * as React from 'react';

import styles from './projects.module.scss';

const ProjectCard: React.FC<IProps> = ({ ...props }) => {
  return (
    <div className={styles.projectCard}>
      <img src={props.image} className={styles.projectCard_image} alt="" />
      <div className={styles.projectCard_info}>
        <ul className={styles.projectCard_tags}>
          {props.tags.map((el, i) => (
            <li key={i}>#{el}</li>
          ))}
        </ul>
        <p className={styles.projectCard_title}>{props.title}</p>
        <p className={styles.projectCard_description}>{props.description}</p>
        <div className={styles.projectCard_links}>
          <button>Demo</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  tags: string[];
  title: string;
  image: string;
  description: string;
}

export { ProjectCard };
