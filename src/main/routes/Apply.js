import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './common.css';
import styles2 from '../../common/CustItem.css';
import Custltem from '../../common/CustItem';
import line from '../../common/borderLine/Line';
import imageCompress from '../../framework/utils/imageCompress';
import UploadImg from '../components/UploadImg'

function Apply({ dispatch, UploadImg }) {
  var date = new Date()

  const UploadData = {

    // list: members.list,
    imgPositive() {
      console.log(id);
      dispatch(routerRedux.push({
        pathname: '/selectImg',
      }));
    },
    positiveChange() {
      dispatch(routerRedux.push({
        pathname: '/showImg',
      }));
    }
  }
  const imgPositive = () =>{
    console.log('imgPositive click')
    document.getElementById("idPositive").click();
  }
  const positiveChange = (event) => {
    let files = event.target.files, file;
    if (files && files.length > 0) {
      imageCompress.convertInputImgae(files, 800, (base64Url,imgURL) => {
        // this.setState({
        //   positiveImgUrl : imgURL,
        //   positiveImgData: base64Url
        // });
        dataArr.positiveImgUrl = imgURL
        dataArr.positiveImgData = base64Url
      });
    }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     files: [],
  //     positiveImgUrl:'',//idPositive
  //     nagetiveImgUrl:'',//idNegative
  //     positiveImgData:'',
  //     nagetiveImgData:'',
  //     animating:false,
  //   };
  // }


  const CustltemData = {
    onOk(){
      console.log(222);
    },
    label: "申请人",
    text: '李四',
  }
  const CustltemData2 = {
    onOk(){
      console.log(222);
    },
    label: "申请日期",
    text: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay(),
  }
  const CustltemData3 = {
    onOk(){
      console.log(222);
    },
    label: "报销金额",
    text: '88',
  }
  function onOk(){
    console.log(222);
  }

  const show =()=>{

    return (
      <div>
        <text>申请人</text>
        <input type="text" className={styles.input} />
      </div>
    )
  }

  return (
    // show(){
    //
    // }

    <div >
      <Custltem {...CustltemData} />
      <div className={styles.line}></div>
      <Custltem {...CustltemData2} />
      <div className={styles.line}></div>
      <Custltem {...CustltemData3} />
      <div className={styles.line}></div>
      <div className={styles2.content} onClick={onOk}>
        <div className={styles2.popups} style={{paddingTop: '10px',alignItems: 'flex-start'}}>
          <div>报销详情</div>

          <div className={styles2.display}>
            <textarea className={styles.textarea}  name="a" style={{ rows:3, cols:20 ,width:'200px',height:'80px'}}>textarea内容</textarea>
          </div>
        </div>
      </div>
<div className={styles.line}></div>
      <UploadImg {...UploadData} />

    </div>
      // <div className={styles2.content} onClick={onOk}>
      //   <div className={styles2.popups} style={{paddingTop: '10px',alignItems: 'flex-start'}}>
      //     <div>票据照片</div>
      //
      //     <div className={styles2.display}>
      //       <div>
      //         <input
      //           id='idPositive'
      //           type='file'
      //           name='idPositive'
      //           onChange={(e) => positiveChange(e)}
      //           style={{display:'none'}}
      //         />
      //         <div onClick= {imgPositive}>上传图片</div>
      //         <img
      //           src={dataArr.nagetiveImgUrl}
      //           className={styles.idPositive}
      //           onClick= {imgPositive}
      //         />
      //
      //       </div>
      //     </div>
      //   </div>
      // </div>





  )
}


export default connect()(Apply);
