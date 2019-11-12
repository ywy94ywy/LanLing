import { fakeAccountLogin } from '@/services/login';
import { clearCookie, setCookie } from '@/utils/utils';

export default {
  state: {},
  effects: {
    *login({ payload }, { call }) {
      const res = yield call(fakeAccountLogin, payload);
      if (res.status === 'ok') {
        setCookie('sessionid', res.sessionid);
        window.location.href = '/';
      }
    },

    *logout(_, {}) {
      clearCookie('sessionid');
      window.location.href = '/';
    },
  },
};
