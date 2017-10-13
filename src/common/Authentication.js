import React,{Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Flex,ImagePicker,Toast,ActivityIndicator} from 'antd-mobile';
import styles from './Authentication.css'
import imageCompress from '../framework/utils/imageCompress';
import { createForm } from 'rc-form';

import arrowIcon from '../../../../../icons/personal/arrow.png';
import writeIcon from '../../../../../icons/personal/write-icon.png';
// import idPositive from '../../../../../assets/idPositive.jpg';
// import idNegative from '../../../../../assets/idNegative.jpg';

import CusSubmitBtn from '../../../../components/member-detail/MinisterTypeBtn';

function goBack() {
  history.go(-1);
}

class Authentication extends Component{

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      positiveImgUrl:'',//idPositive
      nagetiveImgUrl:'',//idNegative
      positiveImgData:'',
      nagetiveImgData:'',
      animating:false,
    };
  }

  complete = () =>{
    this.props.form.validateFields((error, value) => {

      if (error) {
        for (var i in error) {
          error[i].errors.map(e => Toast.info(e.message, 2, null, false));
        }
        return;
      }

      // let isCard = '^\d{15}|\d{}18$';
      // if(!isCard.test(value.idCardNumber)){
      //   Toast.info("请输入有效的身份证号码", 2, null, false)
      // }

      let uploadImgs = [];
      let positiveImg = this.state.positiveImgData;
      let nagetiveImg = this.state.nagetiveImgData;
      if(positiveImg != ''){
        uploadImgs.push(this.state.positiveImgData);
      }
      if(nagetiveImg != ''){
        uploadImgs.push(this.state.nagetiveImgData);
      }
      // console.log('uploadImgs.length', uploadImgs.length);
      if(!uploadImgs || uploadImgs.length < 2){
        Toast.info("请上传身份证正面反面照片", 2, null, false)
        return;
      }
      value.files = uploadImgs;
      // console.log('submit', JSON.stringify(value));
      // return;
      this.props.submit(value)
    });
  }

  imgPositive = () =>{
    console.log('imgPositive click')
    document.getElementById("idPositive").click();
  }
  imgNegative = () =>{
    console.log('imgNegative click')
    document.getElementById("idNegative").click();
  }

  positiveChange = (event) => {
    let files = event.target.files, file;
    if (files && files.length > 0) {
      imageCompress.convertInputImgae(files, 800, (base64Url,imgURL) => {
        this.setState({
          positiveImgUrl : imgURL,
          positiveImgData: base64Url
        });
      });
    }
  }

  negativeChange = (event) => {
    let files = event.target.files, file;
    if (files && files.length > 0) {
      imageCompress.convertInputImgae(files, 800, (base64Url,imgURL) => {
        this.setState({
          nagetiveImgUrl : imgURL,
          nagetiveImgData : base64Url
        });
      });
    }
  }


    render(){
      const { files,submit } = this.state
      const { getFieldProps, getFieldError, getFieldDecorator, setFieldsValue } = this.props.form;
      const { loading } = this.props;

      if(loading){
        this.state.animating = true ;
      }else{
        this.state.animating = false ;
      }

      //返回上一页
      function goBack() {
        history.go(-1);
      }

      const showBtn = () =>{
          return <CusSubmitBtn
            btnName="提交"
            invitationAction={() => this.complete()}/>
      }

      const MarginBottom = () => <div style={{height: '3em', backgroundColor:'#F5F5F9'}}></div>;

      return(
        <div className={styles.content}>
          <div className={styles.title}>
            <img src={arrowIcon} className={styles.titleIcon} onClick={() => goBack()}/>
            <div className={styles.titleText}>身份认证</div>
            {/* <div className={styles.complete}>完成</div> */}
          </div>
          <div style={{
            marginTop: '2.8125em'
          }}>
          <div className={styles.part}>
            <div className={styles.text}>
              爱肋™作为一个真实、严肃的基督教徒的交友平台, 我们要求用户完成身份认证。对于以结婚为目的的用户,
              我们希望创建一个良好的婚恋环境
            </div>
              <div className={styles.enterName}>
                <div className={styles.headName}>真实姓名</div>
                {getFieldDecorator('name', {
                  initialValue:'',
                  rules: [
                    { required: true, message: '请输入真实姓名' }
                  ]
                })(
                  // <TextareaItem rows={5} placeholder="正文" />
                  <input className={styles.inputName}/>
                )}
              </div>
              <div className={styles.enterID}>
                <div className={styles.headID}>身份证号码</div>
                {getFieldDecorator('idCardNumber', {
                  initialValue:'',
                  rules: [
                    { required: true, message: '请输入身份证号码' }
                  ]
                })(
                  <input className={styles.inputID}/>
                )}
              </div>

              <div className={styles.enterID}>
                <div className={styles.head}>上传身份证照片(请务必按照示例上传)</div>
                <div className={styles.info}>
                  您上传的任何身份证照片等资料, 仅供审核使用且他人无法看到, 此外,
                  我们会对照片进行安全处理, 敬请放心。
                </div>
              </div>
              <div className={styles.upload}>

                <div className={styles.example1}>
                  <input
                    id='idPositive'
                    type='file'
                    name='idPositive'
                    onChange={(e) => this.positiveChange(e)}
                    style={{display:'none'}}
                  />
                  <img
                    src={this.state.positiveImgUrl}
                    className={styles.idPositive}
                    onClick={() => this.imgPositive()}
                  />
                  <div>身份证正面照</div>
                </div>

                <div className={styles.example2}>
                  <input
                    id='idNegative'
                    type='file'
                    name='idNegative'
                    onChange={(e) => this.negativeChange(e)}
                    style={{display:'none'}}
                  />
                  <img
                    src={this.state.nagetiveImgUrl}
                    className={styles.idNegative}
                    onClick={() => this.imgNegative()}
                  />
                  <div>身份证反面照</div>

                </div>

              </div>
            </div>
            <MarginBottom/>
              {/* <button className={styles.sublime} onClick={()=>this.complete()}>提交</button> */}
            <div className={styles.footBtn}>
              {showBtn()}
            </div>
          </div>

          <ActivityIndicator
            toast
            text="上传中..."
            animating={this.state.animating}
          />
        </div>
      )
    }
}

const AuthenticationWrapper = createForm()(Authentication);
export default connect()(AuthenticationWrapper);
