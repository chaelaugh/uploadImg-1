import React from 'react';
import { ListView, Icon, Badge } from 'antd-mobile';
import defaultImg from '../../assets/avatar.jpg';
import styles from './MemberList.css';

const check = require('../../icons/check.svg');
const bao = require('../../icons/bao.svg');
const horn = require('../../icons/horn.svg');

const MemberList = ({ loading, list, onViewMember }) => {

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
          <div className={styles.avatar}><img src={defaultImg}/></div>
          <div className={styles.detail}>
            <div className={styles.item}>
              <div className={styles.name}>水果君</div>
              <Icon type={check} size="xxs" />
              <Icon type={bao} size="xxs" />
              <div className={styles.distance}>0.77km | 在线</div>
            </div>
            <div className={styles.item}>
              <Badge text="34岁" style={baseStyle} />
              <Badge text="欢乐家园" style={boxStyle} />
            </div>
            <div className={styles.item}>
              <div className={styles.time}>主后2003年决志</div>
              <div className={styles.time}>2005年受洗</div>
            </div>
            <div className={styles.item}>
              <div className={styles.field}>服侍领域：敬拜 带小组</div>
            </div>
            <div className={styles.item}>
              <Icon type={horn} size="xxs" />
              <div className={styles.informalText}>
                "柔和的能咬断舌头"在生活和工作"柔和的能咬断舌头"在生活和工作
              </div>
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
};

MemberList.propTypes = {
};

export default MemberList;
