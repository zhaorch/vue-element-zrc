import request from '@/utils/request'
import axios from 'axios'
let localHost = 'http://127.0.0.1:8000'

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export const login2 = params => {
  return axios.post(`${localHost}/login/`, params)
}
