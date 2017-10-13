import React from 'react';
import { ListView, Badge, Icon } from 'antd-mobile';
import styles from './TopicCommentList.css';
import defaultImage from '../../assets/avatar.jpg';

const check = require('../../icons/check.svg');
const bao = require('../../icons/bao.svg');
const like = require('../../icons/like.svg');
const comment = require('../../icons/comment.svg');

const TopicCommentList = ({ likeCount = 0, commentCount = 0, loading = false, list = [1,2,3]}) => {

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });

  const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} className={styles.separator} />
    );

  const row = (item) => {
    const baseStyle = {
      backgroundColor: 'transparent',
      borderRadius: 5,
      color: '#333',
      marginRight: 5,
    };
    const boxStyle = {
      ...baseStyle,
      color: 'red',
      border: '1PX solid red',
    };

    return (
      <div key={item} className={styles.normal}>
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
              <Badge text="欢乐家园" style={boxStyle} />
            </div>
            <div className={styles.time}>7分钟</div>
          </div>
        </div>
        <div className={styles.context}>
          <div className={styles.content}>
          写的很好写的很好
          写的很好,写的很好
          写的很好,写的很好,写的很好,
          写的很好,写的很好,,,写的很好
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.normal}>
        <div className={styles.status}>
          <div className={styles.like}><Icon type={like} size="xxs" /> {likeCount} </div>
          <div className={styles.comment}><Icon type={comment} size="xxs" /> {commentCount}</div>
        </div>
        <ListView
          dataSource={dataSource.cloneWithRows(list)}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {loading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          pageSize={4}
          useBodyScroll
          onScroll={() => { }}
          scrollRenderAheadDistance={500}
          scrollEventThrottle={200}
          onEndReachedThreshold={10}
        />

        {/* <div>
          <List>
            <List.Item className={styles.item} thumb={defaultImage}>
              <div className={styles.itemInfo}>
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
              <Brief>
                <div className={styles.content}>写的很好写的很好
                写的很好,写的很好
                写的很好,写的很好,写的很好,
                写的很好,写的很好,,,写的很好
                </div>
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

export default TopicCommentList;
