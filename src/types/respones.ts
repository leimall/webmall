export interface ResponseData<T> {
  code: number;
  message?: string;
  data: T;
}

export interface Response {
  code: number;
  msg?: string;
  data?: any;
}