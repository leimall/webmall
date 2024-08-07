import request from '@/utils/request'


export const getCaptcha = () => {
  return request({
    url: '/auth/captcha',
    method: 'post'
  })
}

export const signIn = (data: any) => {
  return request({
    url: '/auth/signin',
    method: 'post',
    data
  })
}

export const signUp = (data: any) => {
  return request({
    url: 'auth/signup',
    method: 'post',
    data
  })
}

export const signOut = () => {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export const getUserInfo = () => {
  return request({
    url: '/myself/info',
    method: 'post'
  })
}

export const updateUserInfo = (data: any) => {
  return request({
    url: '/myself/update',
    method: 'post',
    data
  })
}
