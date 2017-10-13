import React from 'react';
import { List, Badge, Icon } from 'antd-mobile';
import TopicCommentList from './TopicCommentList.js';
import styles from './TopicDetail.css';
import defaultImage from '../../assets/avatar.jpg';

const Item = List.Item;
const Brief = Item.Brief;

const check = require('../../icons/check.svg');
const bao = require('../../icons/bao.svg');
const like = require('../../icons/like.svg');
const comment = require('../../icons/comment.svg');

const TopicDetail = ({}) => {
  const baseStyle = {
    backgroundColor: 'transparent',
    borderRadius: 0,
    color: '#333',
    marginRight: 5,
  };
  const stickyStyle = {
    ...baseStyle,
    color: 'rgb(41, 135, 247)',
    border: '1PX solid rgb(41, 135, 247)',
  };
  const recommendedStyle = {
    ...baseStyle,
    color: 'red',
    border: '1PX solid red',
  };

  return (
    <div className={styles.normal}>
        <div className={styles.info}>
          <div className={styles.avatar}><img src={defaultImage}/></div>
          <div className={styles.infoContext}>
            <div>
              <div>
                <span className={styles.name}>水果君</span>
                <Icon type={check} size="xxs" />
                <Icon type={bao} size="xxs" />
              </div>
              <Badge text="34岁" style={baseStyle} />
              <Badge text="欢乐家园" style={recommendedStyle} />
            </div>
            <div className={styles.time}>7分钟</div>
          </div>
        </div>
        <div className={styles.context}>
          <div className={styles.title}>
            <Badge text="顶" style={stickyStyle} />
            <Badge text="精" style={recommendedStyle} />
            <div className={styles.titleText}>三自教会的单身会有跟家庭教会的恋爱三自教会的单身会有跟家庭教会的恋爱</div>
          </div>
          <div className={styles.content}>
            我在协和堂服侍多年，在爱肋平台上认识一位家庭教会的兄弟，各方面都比较满意,
            我在协和堂服侍多年，在爱肋平台上认识一位家庭教会的兄弟，各方面都比较满意
          </div>
          <div className={styles.image}>
            <img src={defaultImage}/>
            <img src={defaultImage}/>
            <img src={defaultImage}/>
          </div>
        </div>
        {/* <div className={styles.action}>
          <Icon type={like} size="xxs" /> 100
          <Icon type={comment} size="xxs" /> 30
        </div> */}
        <TopicCommentList />
        {/* <div>
          <List>
            <List.Item className={styles.item} thumb={defaultImage}>
              <div className={styles.itemInfo}>水果君 34岁 <img className={styles.itemVip} src={defaultImage}/>
                <div className={styles.chruch}>喜乐家园</div>
              </div>
              <Brief>
                <div className={styles.time}>5-31 18:36</div>
                <Brief>
                  <div className={styles.content}>写的很好</div>
                </Brief>
              </Brief>
            </List.Item>
            <List.Item className={styles.item} thumb={defaultImage}>
              <div className={styles.itemInfo}>水果君 34岁 <img className={styles.itemVip} src={defaultImage}/>
                <div className={styles.chruch}>喜乐家园</div>
              </div>
              <Brief>
                <div className={styles.time}>5-31 18:36</div>
                <Brief>
                  <div className={styles.content}>写的很好</div>
                </Brief>
              </Brief>
            </List.Item>
            <List.Item className={styles.item} thumb={defaultImage}>
              <div className={styles.itemInfo}>水果君 34岁 <img className={styles.itemVip} src={defaultImage}/>
                <div className={styles.chruch}>喜乐家园</div>
              </div>
              <Brief>
                <div className={styles.time}>5-31 18:36</div>
                <Brief>
                  <div className={styles.content}>写的很好</div>
                </Brief>
              </Brief>
            </List.Item>
          </List>
        </div> */}
    </div>
  )
}

export default TopicDetail;
