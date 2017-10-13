import React from 'react';
import { Icon } from 'antd-mobile';
import defaultImage from '../../assets/avatar.jpg';
import styles from './PersonalProfile.css';

const check = require("../../icons/check.svg");

const PersonalProfile = ({}) => {

  return (
    <div className={styles.normal}>
      <div className={styles.account}>
        <div className={styles.avatar}><img src={defaultImage}/></div>
        <div className={styles.info}>
          <div className={styles.name}>
            <div>水果君</div>
            <Icon type={check} size="xs" />
            <div onClick={() => {}} className={styles.member}>开通会员</div>
          </div>
          <div className={styles.id}>
            <div>ID: 13360041</div>
          </div>
        </div>
        <div onClick={() => {}} className={styles.statusContent}>
          <div className={styles.status}>恋爱中</div>
        </div>
      </div>
      <div className={styles.dynamicCategoryContext}>
        <div className={styles.dynamicCategory}>
          <img src={defaultImage}/>
          <div>读者随笔</div>
        </div>
        <div>|</div>
        <div className={styles.dynamicCategory}>
          <img src={defaultImage}/>
          <div>祷告默想</div>
        </div>
        <div>|</div>
        <div className={styles.dynamicCategory}>
          <img src={defaultImage}/>
          <div>主日备忘</div>
        </div>
      </div>
    </div>
  )
}

export default PersonalProfile;
