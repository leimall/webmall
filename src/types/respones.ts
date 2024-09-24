import { list } from 'postcss';
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