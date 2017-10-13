import React from 'react';
import styles from './index.css';
import { InputItem, Checkbox, Button, DatePicker, List, Tag } from 'antd-mobile';
import { createForm } from 'rc-form';

const Index = ({ isCheck, onChangeStatus, bornDate, determineDate,
   baptizedDate, serveDate, onChangeDate, currentStatus, onCheck, onSave,
   form: { getFieldProps, getFieldsValue, validateFields }
  }) => {

  const CustomChildren = props => (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
    >
      {props.children}
      <span style={{ float: 'right', color: '#888' }}>{props.extra}</span>
    </div>
  );

  function hasErrors(fieldsError){
    console.log(fieldsError)
    // return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  function handleOk(){
    window.location.href="index.html"
    validateFields(error => {
      if(error){
        return;
      }
      else if(baptizedDate && bornDate && determineDate && serveDate){
        const data = {
          ...getFieldsValue(),
          baptizedDate: baptizedDate ? baptizedDate.format('YYYY') : '',
          bornDate: bornDate ?  bornDate.format('YYYY-MM-DD') : '',
          determineDate: determineDate ? determineDate.format('YYYY') : '',
          serveDate: serveDate ? serveDate.format('YYYY') : '',
          type: currentStatus
        }
        onSave(data)
      }
    })
  }

  function handleChange(selected){
    console.log(selected)
  }
  return (
    <div>
    <List>
      <div className={styles.top}/>
      <div className={styles.title}>
        <div className={styles.titleText}>爱肋</div>
        <div className={styles.titleSubText}>真爱，上帝必为你预备</div>
      </div>
      <List.Item>

      <div>
        <div className={styles.name}>XXXX,平安！</div>
        <div className={styles.prompt}>请认真填写以下信息！</div>
      </div>
      </List.Item>
      <List.Item >
        <div className={styles.item}>
          <div>我是：</div>
          <div className={styles.setWidth}>
            <List.Item>
              <Checkbox checked={currentStatus == '1'} onClick={() => onCheck('1')} value="1">单身基督提，要找主内对象</Checkbox>
            </List.Item>
            <List.Item>
              <Checkbox checked={currentStatus == '2'} onClick={() => onCheck('2')} value="2">牧师</Checkbox>
              <Checkbox checked={currentStatus == '3'} onClick={() => onCheck('3')} value="3">长老</Checkbox>
              <Checkbox checked={currentStatus == '4'} onClick={() => onCheck('4')} value="4">牧者</Checkbox>
            </List.Item>
            <List.Item>
              <Checkbox checked={currentStatus == '5'} onClick={() => onCheck('5')} value="5">负责婚恋的核心同工</Checkbox>
            </List.Item>
          </div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.item}>
            <div>我属于</div>
            <select {...getFieldProps('my', {initialValue: '1'})}>
              <option value="1">家庭</option>
              <option value="2">三自</option>
            </select>
            <div>教会，名称：</div>
            <div>
              <InputItem {...getFieldProps('name', {rules: [{required: true}]})} style={{width: '100%'}}/>
            </div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.item}>
            <div>我于主后</div>
            <DatePicker
              {...getFieldProps('bornDate', { })}
              mode="date"
              title="选择日期"
              extra="请选择日期"
              value={bornDate}
              onChange={v => onChangeDate(v, 'bornDate')}
            >
              <CustomChildren></CustomChildren>
            </DatePicker>
            <div>来到这个世界</div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.item}>
            <div>我于主后</div>
            <DatePicker
              {...getFieldProps('determineDate', { })}
              mode="year"
              title="选择年份"
              format={val => val.format('YYYY')}
              extra="请选择年份"
              value={determineDate}
              onChange={v => onChangeDate(v, 'determineDate')}
            >
              <CustomChildren></CustomChildren>
            </DatePicker>
            <div>决志信主</div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.item}>
            <div>我于主后</div>
            <DatePicker
              {...getFieldProps('baptizedDate', { })}
              mode="year"
              format={val => val.format('YYYY')}
              title="选择年份"
              extra="请选择年份"
              value={baptizedDate}
              onChange={v => onChangeDate(v, 'baptizedDate')}
            >
              <CustomChildren></CustomChildren>
            </DatePicker>
            <div>受洗归于基督</div>
          </div>
        </List.Item>
        <List.Item>
          <div className={styles.item}>
            <div>我于主后</div>
            <DatePicker
              {...getFieldProps('serveDate', { })}
              mode="year"
              format={val => val.format('YYYY')}
              title="选择年份"
              extra="请选择年份"
              value={serveDate}
              onChange={v => onChangeDate(v, 'serveDate')}
            >
              <CustomChildren></CustomChildren>
            </DatePicker>
            <div>开始服侍</div>
          </div>
        </List.Item>
      </List>
      <div>
        <div className={styles.filed}>当前服侍领域</div>
        <div className={styles.filedItem}>
          <div className={styles.tagTitle}>主日类</div>
          <div>
            <Tag onChange={(selected) => handleChange(selected)} className={styles.tag}>接待</Tag>
            <Tag onChange={(selected) => handleChange(selected)} className={styles.tag}>主礼</Tag>
            <Tag className={styles.tag}>敬拜</Tag>
            <Tag className={styles.tag}>证道</Tag>
            <Tag className={styles.tag}>财务</Tag>
            <Tag className={styles.tag}>儿童主日学</Tag>
          </div>
        </div>
        <div className={styles.filedItem}>
          <div className={styles.tagTitle}>周间类</div>
          <div>
            <Tag className={styles.tag}>传播音</Tag>
            <Tag className={styles.tag}>带小组</Tag>
            <Tag className={styles.tag}>探访</Tag>
          </div>
        </div>
        <List>
          <div className={styles.btnContent}>

            <Button
            disabled={false}
            className={styles.btn}
            size="large"
            type="primary"
            onClick={() => handleOk()}
            >一键注册</Button>
          </div>
        </List>
      </div>
    </div>
  );
};

Index.propTypes = {
};

export default createForm()(Index);
