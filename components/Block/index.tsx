import * as React from 'react';

import styles from './block.module.scss';

const Block: React.FC<IProps> = ({ children, addClass }) => {
  return <div className={`${addClass} ${styles.block}`}>{children}</div>;
};

interface IProps {
  addClass?: string;
}

export { Block };
