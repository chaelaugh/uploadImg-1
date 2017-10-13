export default {

  namespace: 'index',

  state: {
    isCheck: false,
    currentStatus: '1',
    bornDate: '',
    determineDate: '',
    baptizedDate: '',
    serveDate: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'query'
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *query({ payload }, { call, put }){
    },
    *onChangeStatus({ payload }, { call, put }){
      yield put({
        type: 'save',
        payload: {
          isCheck: payload.status
        }
      })
    },
    *onChangeDate({ payload }, { call, put }){
      console.log(payload)
      if(payload.type === 'bornDate'){
        yield put({
          type: 'save',
          payload: {
            bornDate: payload.date
          }
        })
      }
      if(payload.type === 'determineDate'){
        yield put({
          type: 'save',
          payload: {
            determineDate: payload.date
          }
        })
      }
      if(payload.type === 'baptizedDate'){
        yield put({
          type: 'save',
          payload: {
            baptizedDate: payload.date
          }
        })
      }
      if(payload.type === 'serveDate'){
        yield put({
          type: 'save',
          payload: {
            serveDate: payload.date
          }
        })
      }
    },
    *create({ payload }, { call, put }){
      console.log(payload)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
