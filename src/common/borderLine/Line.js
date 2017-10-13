import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './Line.css';


const line = ({}) => {

  return(
      <div className={styles.line} onClick={onOk}>

      </div>
  )
}

line.propTypes = {
};

export default connect()(line);
