import { Category } from '@/types/category';
import request from '@/utils/request'

export const getCategoryList = (): Promise<{ data: Category[] }> => {
  return request({
    url: `/category/list`,
    method: 'get'
  })
};

