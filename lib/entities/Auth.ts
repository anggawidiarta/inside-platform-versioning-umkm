import type { User } from 'next-auth';
import { IBaseEntity } from '@lib/entities/Base';

export type TUser = {
  id: number;
  fullname: string;
  email: string;
  name: string;
  organization: string;
  profession: string;
  username: string;
  whatsappNumber: string;
  gender: string;
  // TODO: wait for the backend to be ready
  corporateUser?: unknown;
  internalUser?: unknown;
  publicUser?: unknown;
};

export type TReqLoginParams = {
  emailOrUsername: string;
  password: string;
  accountType?: string;
  remember?: boolean;
};

export type TLoginData = {
  user: TUser;
  token: string;
  expiredAt?: string;
} & User;

export type TLoginResponse = {
  message: string;
  data: TLoginData;
  code: number;
};

// register new account
export type TReqRegisterParams = {
  fullname: string;
  email: string;
  whatsappNumber?: string;
  dateOfBirth: string;
  gender: string;
  password: string;
};

// form register new account
export type TFormRegisterAccount = {
  fullname: string;
  email: string;
  whatsappNumber?: string;
  dateOfBirth?: Date;
  gender: string;
  password: string;
};

export type IResponseProfile = {
  code: number;
  data: IDataProfile;
  errors: string;
  message: string;
};

export type IPublicUser = {
  id: number;
  isActive: boolean;
};

export type IDetailAccessInfo = {
  competitionId: number;
  stageIds: number[];
};

export type IJuryAccessInfo = {
  detail: IDetailAccessInfo[];
  isJury: boolean;
};

export type ICompetitionInputterAccessInfo = {
  competitionIds: number[];
  isCompetitionInputter: boolean;
};

export type ICompetitionViewerAccessInfo = {
  competitionIds: number[];
  isCompetitionViewer: boolean;
};

export type IDataProfile = {
  user: IProfile;
  juryAccessInfo: IJuryAccessInfo;
  competitionInputterAccessInfo: ICompetitionInputterAccessInfo;
  competitionViewerAccessInfo: ICompetitionViewerAccessInfo;
};

export interface IProfile extends IBaseEntity {
  id: number;
  name: string;
  email: string;
  roles: IRole[];
  whatsappNumber?: string;
  dateOfBirth?: string;
  gender?: string;
  profession?: string;
  organization?: string;
  // TODO: wait for the backend to be ready
  corporateUser?: unknown;
  internalUser?: unknown;
  publicUser: IPublicUser;
}

export interface IRole extends IBaseEntity {
  id: number;
  name: string;
  key: string;
  description: string;
  permissions: IPermission[];
}

export interface IPermission extends IBaseEntity {
  id: number;
  name: string;
  key: string;
}

export type TReqUpdateProfileParams = {
  fullname: string;
  email: string;
  whatsappNumber: string;
  dateOfBirth: string | Date;
  gender: string;
  profession: string;
  organization: string;
};

export type TReqChangePasswordParams = {
  oldPassword: string;
  newPassword: string;
};
