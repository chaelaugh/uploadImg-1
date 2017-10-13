export default {

  namespace: 'index',

  state: {
    actionType: 'sister',
    category: '黄金',
    items: '3个月 40元',
    topicText: '生命&生活',
    visible: false,
    select: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *addHobby({ payload }, { select, call, put }){
      const selects = yield select(({ index }) => index.select)
      selects.push(payload.value)
      yield put({
        type: 'save',
        payload: {
          select: selects
        }
      })
    },
    *onRemove({ payload }, { select, call, put }){
      const selects = yield select(({ index }) => index.select)
      yield put({
        type: 'save',
        payload: {
          select: selects.filter(item => item !=payload.value)
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
