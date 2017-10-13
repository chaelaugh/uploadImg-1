import React from 'react';
import { connect } from 'dva';
import { getLayout } from '../config/RouteHolder';
import { getMenuList } from '../config/MenuHolder';
import { getToolBarList } from '../config/ToolBarHolder';
import { getConfig } from '../config/CofigHolder';
import { getTabBarList } from '../config/TabBarHolder'

function App({ dispatch, children, location }) {

  const Layout = getLayout();

  const logoText = getConfig().logoText;
  const logo = getConfig().logo;
  const footerText = getConfig().footerText;
  const toolBar = getToolBarList();
  const menu = getMenuList();
  const tabBar = getTabBarList();

  const layoutProps = {
    location,
    logoText,
    logo,
    footerText,
    toolBar,
    menu,
    tabBar,
  };

  return (
    <Layout {...layoutProps}>
      {children}
    </Layout>
  );
}

export default connect()(App);
