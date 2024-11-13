import type { AxiosError } from 'axios';
import { UploadFile } from 'antd';

export type TValidationErrors<T = never> = {
  property: T;
  message: string[];
};

export type TCommonErrorData = {
  code?: number;
  message: string;
  errors?: TValidationErrors[];
};

export type TCommonError = AxiosError<TCommonErrorData>;

export interface ICommonParamsList {
  page: number;
  per_page: number;
  search?: string;
  sort?: string;
  total?: number;
  lokasi?: string;
  kategori?: string;
}

export type TSchemaUpload = {
  file: UploadFile | UploadFile[] | undefined | Blob;
};

export interface INormUpload extends TSchemaUpload {
  fileList: UploadFile[];
}

export type TSuccessResponse<T> = {
  data: T;
  message: string;
};

export type ApiResponse<T> = TSuccessResponse<T> | TCommonErrorData;
