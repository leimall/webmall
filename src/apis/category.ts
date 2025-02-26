import { Category } from '@/types/category';
import type { ResponseData } from '@/types/respones';
import request from '@/utils/request'
type CategoryResponse = ResponseData<Category[]>;

export const getCategoryList = (): Promise<CategoryResponse> => {
  return request({
    url: `/category/list`,
    method: 'get'
  })
};


export const getstyleList = (): Promise<CategoryResponse> => {
  return request({
    url: `/category/style`,
    method: 'get'
  })
};

export const getShapeLists = (): Promise<CategoryResponse> => {
  return request({
    url: '/category/shape',
    method: 'get',
  })
}
