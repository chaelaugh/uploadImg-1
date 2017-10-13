import { query, create, get, update, remove } from '../../framework/service/index';

const type = '882783718376513536'; //话题的typeid

export default {

  namespace: 'topics',

  state: {
    list: [],
    categories: [],
  },

  subscriptions: {
    setup({ dispatch ,history }) {
      history.listen(location => {
        if(location.pathname === '/topics') {
          dispatch({
            type: 'query',
          })
        }
      })
    }
  },

  effects: {
    *query({ payload }, { call, put }) {
      const categoriesResult = yield call(query, `/api/article_categories/list/${type}`, {});
      if (categoriesResult.code === 200 && categoriesResult.data) {
        yield put({
          type: 'querySuccess',
          payload: {
            categories: categoriesResult.data
          }
        });
      }
      const articlesResult = yield call(query, '/api/articles/list', {type: `${type}`});
      if (articlesResult.code === 200 && articlesResult.data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: articlesResult.data.records
          }
        });
      }
    },
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
