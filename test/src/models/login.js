import { routerRedux } from 'dva/router';
import { stringify } from 'querystring';
import { fakeAccountLogin } from '@/services/login';
import router from 'umi/router';
// import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'login',
  state: {
    currentUser: {},
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);

      yield put({
        type: 'changeLogin',
        payload: response,
      }); // Login successfully

      router.push('/');
      // if (response.status === 'ok') {
      //   const urlParams = new URL(window.location.href);
      //   const params = getPageQuery();
      //   let { redirect } = params;

      //   if (redirect) {
      //     const redirectUrlParams = new URL(redirect);

      //     if (redirectUrlParams.origin === urlParams.origin) {
      //       redirect = redirect.substr(urlParams.origin.length);

      //       if (redirect.match(/^\/.*#/)) {
      //         redirect = redirect.substr(redirect.indexOf('#') + 1);
      //       }
      //     } else {
      //       window.location.href = '/';
      //       return;
      //     }
      //   }

      //   yield put(routerRedux.replace(redirect || '/'));
      // }
    },

    *logout(_, { put }) {
      const { redirect } = getPageQuery(); // redirect

      if (window.location.pathname !== '/user/login' && !redirect) {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          }),
        );
      }
    },
  },
  reducers: {
    changeLogin(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      return { ...state, currentUser: payload.currentUser };
    },
  },
};
export default Model;
