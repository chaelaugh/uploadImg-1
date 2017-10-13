import React from 'react';
import { connect } from 'dva';
import { Flex, WhiteSpace, SegmentedControl } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import MediatorList from '../components/MediatorList';
import styles from './common.css';

function Mediators({ dispatch, loading, mediators }) {

  const mediatorListProps = {
    list: mediators.list,
    loading,
    onViewMember(id) {
      dispatch(routerRedux.push({
        pathname: '/mediator-detail',
        query: { id }
      }))
    }
  }

  const onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  };
  const onValueChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{backgroundColor: '#fff'}}>
      <WhiteSpace size="md" />
      <Flex justify="center">
        <SegmentedControl
            values={['牧师/传道/长老', '受托同工']}
            tintColor={'#ff0000'}
            style={{ height: '0.8rem', width: '5rem' }}
            onChange={onChange}
            onValueChange={onValueChange}
          />
      </Flex>
      <WhiteSpace size="md" />
      <MediatorList {...mediatorListProps} />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    mediators: state.mediators
  }
}

export default connect(mapStateToProps)(Mediators);
