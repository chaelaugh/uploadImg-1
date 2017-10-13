import React from 'react';
import styles from './CustItem.css';

const LoveHistory = ({label,text, onOk}) => {


  return (
    <div className={styles.content} onClick={onOk}>
      <div className={styles.popups}>
        <div className={label} >
          {label}
        </div>
        <div className={styles.display}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default LoveHistory;
