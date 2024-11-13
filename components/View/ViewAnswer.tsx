import React from 'react';
import { Typography } from 'antd';
import styles from './View.module.scss';

interface IProps {
  content: string;
  title: string;
}

export const ViewAnswer: React.FC<IProps> = (props) => {
  return (
    <>
      <Typography.Title level={5}>{props?.title}</Typography.Title>
      <div
        className={styles.view__textDescription}
        style={{ marginBottom: 14 }}
      >
        <Typography.Paragraph>{props?.content ?? '-'}</Typography.Paragraph>
      </div>
    </>
  );
};
