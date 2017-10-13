import React from 'react';
import defaultImage from '../../../assets/avatar.jpg'
import { List, Icon } from 'antd-mobile';
import styles from './BasicProfile.css';

const check = require('../../../icons/check.svg');
const bao = require('../../../icons/bao.svg');
const left = require('../../../icons/left.svg');

const BasicProfile = ({ onBackClick }) => {
  return (
    <div>
      <div className={styles.nav}>
        <Icon type={left} onClick={onBackClick} />
      </div>
      <div className={styles.topContent}>
        <div className={styles.avatar}>
          <img src={defaultImage}/>
        </div>
        <div className={styles.nameContext}>
          <div>水果君（李四） 24岁 </div>
          <div><Icon type={check} /></div>
          <div><Icon type={bao} /></div>
        </div>
        <div className={styles.addressContext}>
          <div>主后1993年出生，老家: 湖南-株洲-安仁</div>
          <div>主后2003决志，2005受礼</div>
        </div>
        <div className={styles.fieldContext}>
          <div className={styles.church}>欢乐家园</div>
          <div>服侍领域：敬拜 带小组</div>
        </div>
      </div>
      <div className={styles.distance}>
        <div>0.77km | 在线</div>
      </div>
    </div>
  )
}


export default BasicProfile;
