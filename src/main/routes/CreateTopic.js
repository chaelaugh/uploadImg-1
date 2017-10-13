import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { List, Modal, WhiteSpace, WingBlank, NavBar, Button, InputItem, TextareaItem, ImagePicker } from 'antd-mobile';
import styles from './common.css';

const Item = List.Item;

function CreateTopic({ dispatch, topics }) {

  const files = [];

  function onBackClick() {
    dispatch(routerRedux.push({
      pathname: '/topics',
    }));
  }

  function onAddImageClick(e) {
    console.log(e);
  }

  return (
    <div>
      <div style={{marginBottom: 2, borderBottom: '1PX solid #ddd'}}>
        <NavBar
          mode="light"
          rightContent={<Button type="ghost" size="small" inline>发布</Button>}
          onLeftClick={() => onBackClick()}>
          发布话题
        </NavBar>
      </div>
      <div>
        <List>
          <Item extra="" arrow="horizontal" onClick={() => {
            Modal.operation([
              { text: '生命&生活', onPress: () => {} },
              { text: '召唤&服侍', onPress: () => {} },
            ])
          }}>请选择话题</Item>
          <Item>
            <InputItem placeholder="请填写话题标题"></InputItem>
          </Item>
          <Item>
            <TextareaItem rows={5} placeholder="正文" />
          </Item>
          <Item>
            <ImagePicker
              files={files}
              onChange={(files, type, index) => console.log("change")}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 6}
              onAddImageClick={onAddImageClick}
            />
          </Item>
        </List>
      </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    topics: state.topics
  }
}

export default connect(mapStateToProps)(CreateTopic)
