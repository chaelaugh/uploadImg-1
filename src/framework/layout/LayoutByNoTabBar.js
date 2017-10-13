import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { TabBar } from 'antd-mobile'
import styles from './MainLayout.css';
import defaultImage from '../../assets/avatar.jpg'
export default class LayoutByNoTabBar extends React.Component{

  render() {
    return(
        <div>
          {this.props.children}
        </div>
    )
  }
}

LayoutByNoTabBar.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};
