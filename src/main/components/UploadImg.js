import React from 'react';
import { connect } from 'dva';
import styles2 from '../../common/CustItem.css';
// const UploadiImg = ({}) => {
const UploadiImg = ({ imgPositive, positiveChange }) => {

  imgPositive = () =>{
    console.log('imgPositive click')
    document.getElementById("idPositive").click();
  }
  positiveChange = (event) => {
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


  return (
    <div>
      <div>票据照片</div>

      <div>
        <div>
          <input
            id='idPositive'
            type='file'
            name='idPositive'
            onChange={(e) => positiveChange(e)}
            style={{display:'none'}}
          />
          // <div onClick= {imgPositive}>上传图片</div>
          <img
            src={nagetiveImgUrl}
            onClick= {imgPositive}
          />
        </div>
    </div>
  </div>
  );
}


export default UploadiImg
