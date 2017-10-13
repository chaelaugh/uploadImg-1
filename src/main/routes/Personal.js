import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { List, Icon, WhiteSpace } from 'antd-mobile';
import PersonalProfile from '../components/PersonalProfile';
import styles from './common.css';

const Item = List.Item;
const my = require("../../icons/my.svg");

function My({ dispatch }) {
  function onRun(){
    dispatch(routerRedux.push({
      pathname: '/apply',
    }))
  }
  return(
    <div>
      <div className={styles.title}>
        <div>个人中心</div>
      </div>

      <PersonalProfile />

      <WhiteSpace size="md" />
      <List>
        <Item thumb={<Icon type={my} />}  onClick={() => onRun()}>谁看过我</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>谁喜欢我</Item>
      </List>

      <WhiteSpace size="md" />
      <List>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>我喜欢谁</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>交往记录</Item>
      </List>

      <WhiteSpace size="md" />
      <List>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>信仰历程</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>兴趣爱好</Item>
      </List>

      <WhiteSpace size="md" />
      <List>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>隐秘信息</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>基本信息</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>微信号码</Item>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>生命简史</Item>
      </List>

      <WhiteSpace size="md" />
      <List>
        <Item thumb={<Icon type={my} />} arrow="horizontal" onClick={() => {}}>关于爱肋</Item>
      </List>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProps)(My);
