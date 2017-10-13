import React from 'react';
import { Icon } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import TopicCategories from '../components/TopicCategories';
import TopicList from '../components/TopicList';
import defaultImage from '../../assets/avatar.jpg';
import styles from './common.css';

const newTopic = require('../../icons/new.svg');

function Topics({ dispatch, loading, topics }) {
  const { categories, list } = topics;

  const topicCategoriesProps = {
    categories,
    onSelect(title) {

    }
  }

  const topicListProps = {
    list,
    onViewTopic(id) {
      dispatch(routerRedux.push({
        pathname: '/topic-detail',
        query: { id }
      }))
    }
  }

  function onClick() {
    dispatch(routerRedux.push({
      pathname: '/create-topic',
    }))
  }
  return(
    <div>
      <div className={styles.title}>
        <div>话题</div>
        <div onClick={() => onClick()} className={styles.btn}>
          <Icon type={newTopic} />
        </div>
      </div>
      <TopicCategories {...topicCategoriesProps} />
      <TopicList {...topicListProps}/>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    topics: state.topics
  }
}

export default connect(mapStateToProps)(Topics);
