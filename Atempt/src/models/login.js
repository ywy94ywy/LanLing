import { fakeAccountLogin } from '@/services/login';
import { clearUser, clearCookie, setCookie } from '@/utils/utils';

export default {
  namespace: 'login',
  state: {},
  effects: {
    *login({ payload }, { call }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.status === 'ok') {
        setCookie('sessionid', response.sessionid);
        window.location.href = '/';
      }
    },

    *logout(_, {}) {
      clearUser();
      clearCookie('sessionid');
      window.location.href = '/';
    },
  },
};
