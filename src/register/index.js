import React from 'react';
import { Route, IndexRedirect } from 'dva/router';
import { addRoute, addExtRoute, registerLayout } from '../framework/config/RouteHolder';
import { addMenu } from '../framework/config/MenuHolder';
import { addToolBar } from '../framework/config/ToolBarHolder';
import Index from './routes/Index';

module.exports = {

  init: function(app) {
    addRoute({
        path: '/index',
        name: '/index',
        component: Index,
      });
    app.model(require('./models/index'))
    //  add route
    //  addExtRoute( < Route path="*" component={NotFound} key="NotFound" / > );
    //  addRoute(<IndexRedirect to="/index" key="1"/>, <Route path="/index" component={NotFound} key="4"/>, <Route path="/index2" component={Demo} key="5"/>);
    //
    //  addMenu({key: '/index', name: '首页', icon: 'home'},
    //   {key: '/index2', name: '首页2', icon: 'home'}, {key: '/404', name: '404', icon: 'home'}
    //  );
    //
    //  addToolBar(<div key="1">test</div>);
    //
    //  add model one by one
    //  app.model(require('./models/example'));
    //  or on batch
    //  require.context('./models/', true, /\.js$/)
    //  .keys().forEach( file => app.model(require(`./models/${file.slice(2)}`)) )
  }
}
