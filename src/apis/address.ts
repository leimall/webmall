import type { AddressItem } from '@/types/address';
import type { ResponseLists  } from '@/types/respones'
import request from '@/utils/request'
type addressResponse = ResponseLists<{ list: AddressItem[], total: number }>;


export const getCountry = () => {
  return request({
    url: '/common/constry',
    method: 'get'
  })
}

export const getMyselfAddress = (): Promise<addressResponse>=> {
  return request({
    url: '/myself/address',
    method: 'get'
  })
}

export const createMyselfAddress = (data: any) => {
  return request({
    url: '/myself/address',
    method: 'post',
    data
  })
}

export const updateMyselfAddress = (data: any) => {
  return request({
    url: '/myself/address',
    method: 'put',
    data
  })
}

export const setDefaultAddress = (data: any) => {
  return request({
    url: '/myself/default',
    method: 'put',
    data
  })
}

export const deleteAddress = (data: any) => {
  return request({
    url: '/myself/address',
    method: 'delete',
    data
  })
}
