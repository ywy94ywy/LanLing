import { queryCurrent } from './service';

const Model = {
  namespace: 'mainAndHome',
  state: {
    currentUser: {},
  },
  effects: {
    *init(_, { put }) {
      yield put({
        type: 'fetchUserCurrent',
      });
    },

    *fetchUserCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'save',
        payload: {
          currentUser: response,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    clear() {
      return {
        currentUser: {},
      };
    },
  },
};
export default Model;
