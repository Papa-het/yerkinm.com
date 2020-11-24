import * as React from 'react';

import { Block, About, Experiences, Projects } from 'components';

import styles from './main.module.scss';

const MainPageComponent: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.infoBlock}>
        <Block addClass={styles.about}>
          <About />
        </Block>
        <Block>
          <Experiences />
        </Block>
      </div>
      <div className={styles.blogBlock}>
        <Projects />
      </div>
    </div>
  );
};

export { MainPageComponent };
