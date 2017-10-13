import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

const WorkExperience = ({ }) => {
  return (
    <List renderHeader={<div>工作情况</div>}>
      <Item extra={'可圈点'}>单位名称</Item>
      <Item extra={'互联网'}>行业</Item>
      <Item extra={'工程师'}>职业</Item>
      <Item extra={''}>职位或岗位</Item>
    </List>
  )
}


export default WorkExperience;
