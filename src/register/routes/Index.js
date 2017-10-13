import React from 'react';
import { connect } from 'dva';
import IndexList from '../components/Index'
function Index({ dispatch, index }) {

  const { isCheck, currentStatus, bornDate, determineDate, baptizedDate, serveDate } = index
  const indexListProps = {
    isCheck,
    currentStatus,
    bornDate,
    determineDate,
    baptizedDate,
    serveDate,
    onChangeStatus(status){
      dispatch({
        type: 'index/onChangeStatus',
        payload: { status }
      })
    },
    onCheck(value){
      dispatch({
        type: 'index/save',
        payload: {
          currentStatus: value
        }
      })
    },
    onChangeDate(date, type){
      dispatch({
        type: 'index/onChangeDate',
        payload: { date, type }
      })
    },
    onSave(data){
      dispatch({
        type: 'index/create',
        payload: data
      })
    }
  }
  return (
    <div>
      <IndexList {...indexListProps}/>
    </div>
  );
}

Index.propTypes = {
};

function ribStateToProps(state, ownProps){
  return {
    index: state.index
  }
}

export default connect(ribStateToProps)(Index);
