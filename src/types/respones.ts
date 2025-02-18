export interface ResponseData<T> {
  code: number;
  msg?: string;
  data: T;
}

export interface Response {
  code: number;
  msg?: string;
  data?: any;
}

export interface ResponseLists<T> {
  code: number;
  msg?: string;
  data?: T;
}

export interface ResponsePageList<T> {
  code: number;
  msg?: string;
  data?: {
    list: T;
    page: number;
    pageSize: number;
    total: number;
  }
}