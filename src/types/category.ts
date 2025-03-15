import type { Product } from "./products";

export type CategoryItem = {
    ID: number
    title: string,
    title_en: string,
    parent_id: number,
    type: number,
    value: string,
    createdAt: Date,
    updatedAt: Date
}

export type CountryItem = {
  name_en: string; 
  code: string; 
}

export interface Category {
  ID: number;
  title: string;
  title_en: string;
  parent_id: number;
  type: number;
  value: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  children?: Category[];
}

export type CategoryProduct = {
  list: Product[];
  total: number;
}