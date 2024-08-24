import request from '@/utils/request'


export const getCountry = () => {
  return request({
    url: '/common/constry',
    method: 'get'
  })
}

export const getMyselfAddress = () => {
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

