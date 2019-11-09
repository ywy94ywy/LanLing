import request from '@/utils/request';

export async function queryCurrent(params) {
  return request('/api/currentUser', {
    method: 'POST',
    data: params,
  });
}
