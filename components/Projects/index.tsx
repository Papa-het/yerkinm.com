import * as React from 'react';

import { Block } from 'components';
import { ProjectCard } from './ProjectCard';

import styles from './projects.module.scss';
import { projects } from './mock';

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <Block>
        <p className={styles.title}>Projects (3)</p>
      </Block>
      <ul className={styles.list}>
        {projects.map((el, i) => (
          <li className={styles.item} key={i}>
            <Block>
              <ProjectCard {...el} />
            </Block>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Projects };
