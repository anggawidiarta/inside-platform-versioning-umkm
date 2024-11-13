import React from 'react';
import styles from './View.module.scss';
import classNames from 'classnames';

interface IProps {
  content: string;
  className?: string;
}

export const ViewContentQuill: React.FC<IProps> = ({
  content,
  className = '',
}) => {
  return (
    <div
      className={classNames(styles.reactQuillView, className)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
