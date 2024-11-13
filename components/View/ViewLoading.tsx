import React from 'react';
import styles from './View.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

export const ViewLoading: React.FC = () => {
  return (
    <div className={styles.viewLoading}>
      <LoadingOutlined style={{ marginRight: '8px' }} /> <b>Loading...</b>
    </div>
  );
};
