import React from 'react'
import { connect } from 'dva'
import Members from '../components/Members'
import styles from '../components/index.css'

function Member({ dispatch, index }){
  const membersProps = {
    category: index.category,
    items: index.items,
    onCategory(value){
      dispatch({
        type: 'index/save',
        payload: {
          category: value
        }
      })
    },
    onItem(value){
      dispatch({
        type: 'index/save',
        payload: {
          items: value
        }
      })
    }
  }
  return(
    <div>
      <div className={styles.title}>
        <div>会员中心</div>
      </div>
      <Members {...membersProps}/>
    </div>
  )
}

function ribToProps(state, ownProps){
  return {
    index: state.index
  }
}
export default connect(ribToProps)(Member)
