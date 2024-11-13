import React from 'react';
import { IDataProfile } from '@lib/entities/Auth';

export const UserContext = React.createContext<IDataProfile | undefined>(
  undefined
);
