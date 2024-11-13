export interface IMeta {
  page: number;
  per_page: number;
  total: number;
  totalPage: number;
  current_page: number;
  last_page: number;
}

export interface IPagination<T> {
  data: T[];
  message?: string;
  meta?: IMeta;
}

export interface IPaginationObject<T> {
  data: T;
  meta: IMeta;
}
