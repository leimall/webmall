import type { ProductDetail } from '@/types/products';
import type { ResponseData  } from '@/types/respones'
import request from '@/utils/request'
type ProductDetailResponse = ResponseData<ProductDetail>;


export const getProductCart = (id: string): Promise<ProductDetailResponse> => {
  return request({
    url: `/product/cart/${id}`,
    method: 'get'
  })
}


export const getUserCartList = () => {
  return request({
    url: '/cart/list',
    method: 'post'
  })
}

export const createCartItem = (data: any) => {
  return request({
    url: '/cart/add',
    method: 'post',
    data
  })
}

export const updateCartItem = (data: any) => {
  return request({
    url: '/cart/update',
    method: 'post',
    data
  })
}

export const deleteCartItem = (data: any) => {
  return request({
    url: '/cart/delete',
    method: 'post',
    data
  })
}

export const deleteCartItemOne = (data: any) => {
  return request({
    url: '/cart/deleteone',
    method: 'post',
    data
  })
}

