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
