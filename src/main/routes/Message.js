import React from 'react'
import { connect } from 'dva'
import styles from '../components/Courses.css'
import MessageList from '../components/MessageList'
function Message(){
  return(
    <div>
      <div className={styles.title}>
        <div>消息列表</div>
      </div>
      <MessageList/>
    </div>
  )
}

export default connect()(Message);
