import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Detail from '../components/TopicDetail';

function TopicDetail({ dispatch, loading, topics }) {
  const detailProps = {

  };

  function onBackClick() {
    dispatch(routerRedux.push({
      pathname: '/topics',
    }));
  }

  return (
    <div>
      <div style={{marginBottom: 2, borderBottom: '1PX solid #ddd'}}>
        <NavBar
          mode="light"
          onLeftClick={() => onBackClick()}>
          话题详情
        </NavBar>
      </div>
      <Detail {...detailProps} />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    topics: state.topics
  }
}
export default connect(mapStateToProps)(TopicDetail)
