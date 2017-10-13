import React from 'react'
import styles from './Members.css'
import defaultImage from '../../assets/avatar.jpg'
import { Button, Tag } from 'antd-mobile'

const Members = ({ category, onCategory, items, onItem}) => {


  const btnStyle = {
    color: 'white',
    backgroundColor: '#F14956'
  }

  const btn1Style = {
    color: 'black',
    backgroundColor: 'white'
  }

  const vipCategory = ["黄金", "铂金"]
  const vipItem = ['1个月 15元', '3个月 40元', '6个月 70元', '12个月 130元', '24个月 250元']
  function renderBtn() {
    if (vipCategory && vipCategory.length > 0) {
      return vipCategory.map(item => {
        let btnClass = [
          `${styles.tag}`
        ];
        if (item === category) {
          btnClass.push(`${styles.selectTag}`);
        }
        return (
          <div key={item} onClick={() => onCategory(item)} className={btnClass.join(' ')}>
            {item}
          </div>
        )
      })
    }
  }

  function renderItem() {
    if (vipItem && vipItem.length > 0) {
      return vipItem.map(item => {
        let btnClass = [
          `${styles.item}`
        ];
        if (item === items) {
          btnClass.push(`${styles.selectTag}`);
        }
        return (
          <div key={item} onClick={() => onItem(item)} className={btnClass.join(' ')}>
            {item}
          </div>
        )
      })
    }
  }

  return(
    <div className={styles.context}>
      <div className={styles.openVip}>
        <div className={styles.opVip}>
          <img src={defaultImage}/>
          <div>开通会员享有更多特权</div>
        </div>
        <Button style={btnStyle} inline>立即开通</Button>
      </div>
      <div className={styles.vipCategory}>
        {renderBtn()}
      </div>
      <div className={styles.vipItemContext}>
        {renderItem()}
      </div>
        <div className={styles.privilegeTitle}>会员特权</div>
        <div className={styles.privilegeContent}>
          <p1>黄金会员</p1>
          <p2>查看谁看过我</p2>
          <p2>查看用户详情</p2>
          <p2>查看用户图片</p2>
          <p2>发起交往</p2>
      </div>
    </div>
  )
}

export default Members;
