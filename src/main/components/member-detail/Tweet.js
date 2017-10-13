import React from 'react';
import defaultImage from '../../../assets/avatar.jpg';
import { List, Icon, Tag, Flex } from 'antd-mobile';
import styles from './Tweet.css';

const Item = List.Item;

const Tweet = ({ }) => {
  return (
    <List>
      <Item>
        <div className={styles.normal}>
          <div className={styles.title}>TA的动态</div>
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
      </Item>
      <Item wrap>
        <div className={styles.narmal}>
          <div className={styles.title}>TA的信仰历程</div>
          <div className={styles.courseContent}>
            我从来没有想到自己会以这样的方式认识上帝，2003年的冬天，
              一次国外的商务考察之行，竟然会给我的人生带来如此重大
          </div>
        </div>
      </Item>
      <Item>
      <div className={styles.narmal}>
        <div className={styles.title}>TA的兴趣爱好</div>
        <Flex wrap="wrap" justify="center">
          <Tag className={styles.hobbyTag}>健身</Tag>
          <Tag className={styles.hobbyTag}>游泳</Tag>
          <Tag className={styles.hobbyTag}>爬山</Tag>
          <Tag className={styles.hobbyTag}>看书</Tag>
          <Tag className={styles.hobbyTag}>唱K</Tag>
          <Tag className={styles.hobbyTag}>旅行</Tag>
          <Tag className={styles.hobbyTag}>看电影</Tag>
        </Flex>
      </div>
      </Item>
    </List>
  )
}


export default Tweet;
