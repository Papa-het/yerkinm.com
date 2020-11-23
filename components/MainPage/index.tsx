import * as React from 'react';

import { Block, About } from 'components';

import styles from './main.module.scss';

const MainPageComponent: React.FC = () => {
  return (
    <div className={styles.main}>
      <Block addClass={styles.about}>
        <About />
      </Block>
      <Block addClass={styles.experience}>Experince</Block>
      <Block addClass={styles.blog}>Blog</Block>
      <Block addClass={styles.projects}>Projects</Block>
    </div>
  );
};

export { MainPageComponent };
