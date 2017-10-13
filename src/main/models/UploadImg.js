export default {

  namespace: 'UploadImg',

  state: {
    files: [],
    positiveImgUrl:'',//idPositive
    nagetiveImgUrl:'',//idNegative
    positiveImgData:'',
    nagetiveImgData:'',
    animating:false,
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
