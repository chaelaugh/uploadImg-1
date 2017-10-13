import React from 'react';
import { ListView, Badge } from 'antd-mobile';
import styles from './TopicList.css';
import defaultImage from '../../assets/avatar.jpg';

const TopicList = ({ onViewTopic, list, loading }) => {

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });

  const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} className={styles.separator} />
    );

  const row = (item) => {
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
      <div onClick={() => onViewTopic(item.id)} key={item} className={styles.context}>
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
    )
  };

  return(
    <div className={styles.normal}>
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
    </div>
  )
}

export default TopicList;
