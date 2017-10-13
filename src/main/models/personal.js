import { create, update, remove, query } from '../../framework/service/index';

export default {

  namespace: 'personal',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/personal') {
          dispatch({
            type: 'query',
          })
        }
      })
    },
  },

  effects: {
    *query({ payload }, { call, put }) {  // eslint-disable-line
      const { code, data, message } = yield call(query, '/api/members/list', {});
      if (code === 200 && data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.records
          }
        })
      }
    },
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  }

};