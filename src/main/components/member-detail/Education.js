import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

const Education = ({ }) => {
  return (
    <List renderHeader={<div>教育背景</div>}>
      <Item extra={'北京大学'}>院校</Item>
      <Item extra={'计算机'}>专业</Item>
      <Item extra={'2010年-2014年'}>起止年份</Item>
      <Item extra={'本科'}>学历</Item>
    </List>
  )
}


export default Education;
