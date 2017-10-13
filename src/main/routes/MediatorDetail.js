import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import BasicProfile from '../components/member-detail/BasicProfile';

function MediatorDetail({ dispatch, mediators }) {

  const basicProfileProps = {
    onBackClick() {
      dispatch(routerRedux.push({
        pathname: '/mediators',
      }));
    }
  }

  const Seperator = () => <div style={{marginBottom: 8}}></div>;

  return (
    <div>
      <BasicProfile {...basicProfileProps} />
      <Seperator />


    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    mediators: state.mediators
  }
}
export default connect(mapStateToProps)(MediatorDetail);
