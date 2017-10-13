import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import BasicProfile from '../components/member-detail/BasicProfile';
import Tweet from '../components/member-detail/Tweet';
import WorkExperience from '../components/member-detail/WorkExperience';
import Education from '../components/member-detail/Education';
import SecretProfile from '../components/member-detail/SecretProfile';

function MemberDetail({ dispatch, members }) {

  const basicProfileProps = {
    onBackClick() {
      dispatch(routerRedux.push({
        pathname: '/members',
      }));
    }
  }

  const Seperator = () => <div style={{marginBottom: 8}}></div>;

  return (
    <div>
      <BasicProfile {...basicProfileProps} />
      <Seperator />
      <Tweet />
      <Seperator />
      <WorkExperience />
      <Seperator />
      <Education />
      <Seperator />
      <SecretProfile />
      <Seperator />

    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    members: state.members
  }
}
export default connect(mapStateToProps)(MemberDetail);
