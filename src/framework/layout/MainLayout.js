import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { TabBar, Icon } from 'antd-mobile';
import styles from './MainLayout.css';
import { getRoutes } from '../config/RouteHolder';
import defaultImage from '../../assets/avatar.jpg';

export default class Main extends React.Component {

  renderLayoutByNotTabBar() {
    return (this.props.children);
  }

  renderLayout() {
    const selectedBar = this.props.tabBar.filter(item => item.key === this.props.location.pathname);

    return (
      <div>
        <div>{this.props.children}</div>
        {
          this.props.tabBar && this.props.tabBar.length > 0 ?
          <TabBar tintColor="red">
            {
              this.props.tabBar.map(item =>
                <TabBar.Item
                 icon={<Icon type={item.icon} />}
                 selectedIcon={<Icon type={item.selectIcon} />}
                 selected={item.key === this.props.location.pathname}
                 title={item.name}
                 key={item.name}
                 onPress={() => window.location.hash = `${item.key}`}
                 />
              )
            }
          </TabBar> : ''
        }
      </div>
    )
  }

  render() {
    return (
      <div>
      {
        getRoutes()[0].childRoutes.filter(item => item.path == this.props.location.pathname)[0].layout ?
        this.renderLayout() : this.renderLayoutByNotTabBar()
      }
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};
