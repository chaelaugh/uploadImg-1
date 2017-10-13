import React from 'react'
import { connect } from 'dva'
import styles from '../components/index.css'
import TopicList from '../components/TopicList'
function TopicCategory({ dispatch, topic}){
  const { category } = topic
  return(
    <div>
      <div className={styles.title}>{category}</div>
      <TopicList/>
    </div>
  )
}
function ribToProps(state, ownProps){
  return {
    topic: state.topic
  }
}
export default connect(ribToProps)(TopicCategory)
