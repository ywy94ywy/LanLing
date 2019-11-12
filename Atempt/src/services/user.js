import request from '@/utils/request';

export async function queryCurrent(params) {
  return request('/api/userInfo', {
    method: 'POST',
    data: params,
  });
}

export async function queryMenu(params) {
  return request('/api/userAuthMenu', {
    method: 'POST',
    data: params,
  });
}
