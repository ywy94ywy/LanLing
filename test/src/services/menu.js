import request from '@/utils/request';

export async function getMenu(params) {
  return request('/api/getMenu', {
    method: 'POST',
  });
}
