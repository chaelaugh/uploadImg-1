import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import MemberList from '../components/MemberList';
import { routerRedux } from 'dva/router';
import defaultImage from '../../assets/avatar.jpg';
import styles from './common.css';

const bell = require('../../icons/bell.svg');
const filter = require('../../icons/filter.svg');

function Members({ dispatch, loading, members }) {

  const memberListProps = {
    loading,
    list: members.list,
    onViewMember(id) {
      console.log(id);
      dispatch(routerRedux.push({
        pathname: '/member-detail',
        query: { id }
      }));
    }
  }

  function onClick() {
    dispatch(routerRedux.push({
      pathname: '/message'
    }));
  }

  return (
    <div>
      <div className={styles.title}>
        <div onClick={() => onClick()} className={styles.text}>
          <Icon type={bell} />
        </div>
        <div>姊妹</div>
        <div className={styles.btn}>
          <Icon type={filter} />
        </div>
      </div>
      {/* <MemberList {...memberListProps} /> */}
    </div>
  )
}

Members.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    members: state.members,
  }
}
export default connect(mapStateToProps)(Members);
