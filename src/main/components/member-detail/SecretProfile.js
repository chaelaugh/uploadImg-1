import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

const SecretProfile = ({ }) => {
  return (
    <List renderHeader={<div>隐秘信息</div>}>
      <Item extra={'是'}>是否十一贡献</Item>
      <Item extra={'180CM'}>身高</Item>
      <Item extra={'75KG'}>体重</Item>
      <Item extra={'良好'}>健康状况</Item>
      <Item extra={''}>婚恋史</Item>
    </List>
  )
}


export default SecretProfile;
