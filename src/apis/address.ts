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

