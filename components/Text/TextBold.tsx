import React from 'react';

interface IProps {
  content: string;
}

export const TextBold: React.FC<IProps> = (props) => {
  return <b style={{ fontFamily: 'Calibri' }}>{props.content}</b>;
};
