import type { CategoryProduct } from '@/types/category';
import type { ProductComment } from '@/types/product_comment';
import type { Product, ProductDetail, ProductSearch } from '@/types/products';
import type { ResponseData, ResponsePageList  } from '@/types/respones'
import request from '@/utils/request'
import { comment } from 'postcss';
type ProductDetailResponse = ResponseData<ProductDetail>;
type productResponse = ResponsePageList<Product[]>;
type ProductCommentListResponse = ResponsePageList<ProductComment[]>;
type ResponseLists = ResponseData<ProductSearch[]>;

export const getProductList = () => {
  return request({
    url: '/product/list',
    method: 'get'
  })
}
export const getLasterProductList = () => {
  return request({
    url: '/product/lastest',
    method: 'get'
  })
}

export const getBestProductList = () => {
  return request({
    url: '/product/bastseller',
    method: 'get'
  })
}

export const getSaleProductList = () => {
  return request({
    url: '/product/sale',
    method: 'get'
  })
}

export const getProductDetail = (id: string): Promise<ProductDetailResponse> => {
  return request({
    url: `/product/detail/${id}`,
    method: 'get'
  })
}

export const getProductByCategory = (id: string, { offset = 1, limit = 12 } = {}): Promise<productResponse> => {
  return request({
    url: `/product/category?categoryId=${id}&offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

export const getProductByComment = (data: any): Promise<ProductCommentListResponse> => {
  return request({
    url: `/product/comment`,
    method: 'get',
    params: data
  })
}

export const searchProducts = (data: any): Promise<productResponse> => {
  return request({
    url: `/product/search`,
    method: 'get',
    params: data
  })
}

export const getAllProductList = (): Promise<ResponseLists>  => {
  return request({
    url: '/product/lists',
    method: 'get'
  })
}

export const getProductSku = (id: string) => {
  return request({
    url: `/product/sku/${id}`,
    method: 'get'
  })
}
