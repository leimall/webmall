import { BillingAddressItem } from './../types/address';
import type { AddressItem } from '@/types/address';
import type { ResponseLists  } from '@/types/respones'
import request from '@/utils/request'
type addressResponse = ResponseLists<{ list: AddressItem[], total: number }>;
type BillingAddressResponse = ResponseLists< BillingAddressItem >;


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


export const getBillingAddress = (): Promise<BillingAddressResponse>=> {
  return request({
    url: '/myself/billingaddress',
    method: 'get'
  })
}
export const createORUpdateBillingAddress = (data: any) => {
  return request({
    url: '/myself/billingaddress',
    method: 'post',
    data
  })
}

export const updateBillingAddress = (data: any) => {
  return request({
    url: '/myself/billingaddress',
    method: 'put',
    data
  })
}