import React from 'react'
import styles from './MessageList.css'
import { List } from 'antd-mobile'
import defaultImage from '../../assets/avatar.jpg'
const Item = List.Item;
const Brief = Item.Brief;
const MessageList = () => {
  return(
    <div>
      <Item className={styles.item} thumb={defaultImage} >
        <div className={styles.time}>5-31 18:30</div>
        <div className={styles.text}>
          水果君 34岁
          <img src={defaultImage}/>
          <div className={styles.church}>喜乐家园</div>
        </div>
        <Brief>
          给你发送了交往请求
        </Brief>
      </Item>
      <Item className={styles.item} thumb={defaultImage}>
        <div className={styles.time}>5-31 18:30</div>
        <div className={styles.text}>
          水果君 34岁 <img src={defaultImage}/> <div className={styles.church}>喜乐家园</div>
        </div>
        <Brief>
          给你发送了中保邀请
        </Brief>
      </Item>
      <Item className={styles.item} thumb={defaultImage}>
        <div className={styles.time}>5-31 18:30</div>
        <div className={styles.text}>
          水果君 34岁 <img src={defaultImage}/> <div className={styles.church}>喜乐家园</div>
        </div>
        <Brief>
          给你发送了交往请求
        </Brief>
      </Item>
    </div>
  )
}

export default MessageList;
