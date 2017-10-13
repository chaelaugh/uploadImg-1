import React from 'react';
import { ListView, Badge, Icon } from 'antd-mobile';
import defaultImage from '../../assets/avatar.jpg';
import styles from './MediatorList.css';

const check = require('../../icons/check.svg');
const horn = require('../../icons/horn.svg');


const MediatorList = ({ loading, list, onViewMember }) => {

  function renderHerderList(){
    return (
      list.map(item => {
        return(
          <div key={item}>
            <div className={styles.content} onClick={() => onClick(item)}>
              <div className={styles.avatar}><img src={defaultImage}/></div>
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div>水果君</div>
                  <div><img src={defaultImage}/></div>
                </div>
                <div className={styles.item}>
                  <div className={styles.church}>喜乐家园</div>
                  <div className={styles.lamb}>
                    <div>小羊</div>
                    <div className={styles.lambAge}>8</div>
                  </div>
                </div>
                <div>
                  <div className={styles.distance}>0.77km</div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }



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
      <div key={item} onClick={() => onViewMember(item.id)}>
        <div className={styles.content}>
          <div className={styles.avatar}><img src={defaultImage}/></div>
          <div className={styles.detail}>
            <div className={styles.item}>
              <div className={styles.name}>水果君</div>
              <Icon type={check} size="xxs" />
              <div className={styles.distance}>0.77km | 在线</div>
            </div>
            <div className={styles.item}>
              <Badge text="欢乐家园" style={boxStyle} />
              <div>小羊 8</div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
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
  );

}

export default MediatorList;
