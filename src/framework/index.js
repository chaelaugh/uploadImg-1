import React from 'react';
import { Route } from 'dva/router';
import { addRoute, addExtRoute, registerLayout } from './config/RouteHolder';
import { addMenu } from './config/MenuHolder';
import { addToolBar } from './config/ToolBarHolder';
import { setLogo, setLogoText, setFooterText, setConfig } from './config/CofigHolder';
import NotFound from './routes/NotFound';
import Demo from './routes/Demo';

module.exports = {

  init: function(app, config) {
    if (config) {
      setConfig(config);
    }
    //registerLayout(SideLayout);

    if (config && config.demo) {
      // addRoute({
      //   path: '/index',
      //   name: '/index',
      //   component: NotFound,
      // });
      addRoute({
        path: '/index',
        name: '/index',
        indexRoute: { onEnter: (nextState, replace) => replace('/index/sub') },
        childRoutes: [
          {
            path: '/index/sub',
            name: '/index/sub',
            component: Demo,
          },
          {
            path: '/index/sub2',
            name: '/index/sub2',
            component: Demo,
          }
        ]
      },
      {
        path: 'index2',
        name: '/index2',
        indexRoute: { onEnter: (nextState, replace) => replace('/index2/sub') },
        childRoutes: [
          {
            path: '/index2/sub',
            name: '/index2/sub',
            component: NotFound,
          },
          {
            path: '/index2/sub2',
            name: '/index/sub2',
            component: Demo,
          }
        ]
      },
      {
        path: '/index3',
        name: '/index3',
        component: Demo,
      });
      addExtRoute({
        path: '/ext',
        name: 'NotFound',
        component: NotFound,
      });
      addMenu({
        key: '/index',
        name: '菜单1',
        icon: 'home',
        subMenu: [
          {
            key: '/index/sub',
            name: '菜单1-1',
            icon: 'home',
          },
          {
            key: '/index/sub2',
            name: '菜单1-2',
            icon: 'home',
          },
        ],
      },
      {
        key: '/index2',
        name: '菜单2',
        icon: 'home',
        subMenu: [
          {
            key: '/index2/sub',
            name: '菜单2-1',
            icon: 'home',
          },
          {
            key: '/index2/sub2',
            name: '菜单2-2',
            icon: 'home',
          },
        ],
      },
      {
        key: '/index3',
        name: '菜单3',
        icon: 'home',
      });

      addToolBar(<div key="1">profile</div>);
  }

    //  add model one by one
    //  app.model(require('./models/example'));
    //  or on batch
    //  require.context('./models/', true, /\.js$/)
    //  .keys().forEach( file => app.model(require(`./models/${file.slice(2)}`)) )

  }
}
