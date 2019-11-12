import { queryCurrent } from '@/services/user';

export default {
  state: {
    currentUser: {},
  },
  effects: {
    *fetchUser({}, { call, put }) {
      const res = yield call(queryCurrent);
      yield put({
        type: 'saveUser',
        payload: res.user,
      });
    },
  },
  reducers: {
    saveUser(state, { payload }) {
      return { ...state, currentUser: payload };
    },
  },
};
