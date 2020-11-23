import * as React from 'react';

import styles from './layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export { Layout };
