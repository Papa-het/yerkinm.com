import * as React from 'react';

import styles from './about.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <img src="/me.jpeg" alt="me" />
      <p className={styles.name}>Yerkin Myrzabekov</p>
      <p className={styles.position}>Front-end Developer</p>

      <a href="mailto:yerkinmm@gmail.com" className={styles.email}>
        yerkinmm@gmail.com
      </a>
      <a href="tel:+77002624168" className={styles.phone}>
        +7 700 262-41-68
      </a>
      <a className={styles.location}>Нур-Султан, Казахстан</a>

      <p className={styles.description}>
        Увлекаюсь фронтендом, и не только. Применяю на проектах React,
        TypeScript, Vue.
      </p>
    </div>
  );
};

export { About };
