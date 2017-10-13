import { React } from 'react';
import { Route, IndexRedirect } from 'dva/router';
import { addRoute, addExtRoute, registerLayout } from '../framework/config/RouteHolder';
import { addMenu } from '../framework/config/MenuHolder';
import { addToolBar } from '../framework/config/ToolBarHolder';
import { addTabBar } from '../framework/config/TabBarHolder';

import Members from './routes/Members';
import Mediators from './routes/Mediators';
import Topics from './routes/Topics';
import Personal from './routes/Personal';
import MemberDetail from './routes/MemberDetail';
import Apply from './routes/Apply.js';
import MediatorDetail from './routes/MediatorDetail';
// import TopicCategory from './routes/TopicCategory';
// import Course from './routes/Course';
// import Secret from './routes/Secret';
// import Basic from './routes/Basic';
// import History from './routes/Histoty';
// import Hobby from './routes/Hobby';
// import Member from './routes/Member';
// import Identification from './routes/Identification';
// import Message from './routes/Message';
import CreateTopic from './routes/CreateTopic';
import TopicDetail from './routes/TopicDetail';
// import HerderInformation from './routes/HerderInformation';

const male = require('../icons/male.svg');
const maleSelected = require('../icons/male-selected.svg');
const female = require('../icons/female.svg');
const femaleSelected = require('../icons/female-selected.svg');
const my = require('../icons/my.svg');
const mySelected = require('../icons/my-selected.svg');
const topic = require('../icons/topic.svg');
const topicSelected = require('../icons/topic-selected.svg');
const sheep = require('../icons/sheep.svg');
const sheepSelected = require('../icons/sheep-selected.svg');
const mediator = require('../icons/mediator.svg');
const mediatorSelected = require('../icons/mediator-selected.svg');

module.exports = {

  init: function(app) {

    addRoute({
        path: '/members',
        name: '/members',
        component: Members,
        layout: true,
      },{
        path: '/mediators',
        name: '/mediators',
        component: Mediators,
        layout: true,
      },{
        path: '/topics',
        name: '/topics',
        component: Topics,
        layout: true,
      },{
        path: '/create-topic',
        name: '/create-topic',
        component: CreateTopic,
        layout: false,
      },{
        path: '/topic-detail',
        name: '/topic-detail',
        component: TopicDetail,
        layout: false,
      },{
        path: '/personal',
        name: '/personal',
        component: Personal,
        layout: true,
      // },{
      //   path: '/topicCategory',
      //   name: '/topicCategory',
      //   component: TopicCategory,
      //   layout: false,
      },
      {
        path: '/member-detail',
        name: '/member-detail',
        component: MemberDetail,
        layout: false,
      },{
        path: '/apply',
        name: '/apply',
        component: Apply,
        layout: false,
      // },{
      //   path: '/course',
      //   name: '/course',
      //   component: Course,
      //   layout: false,
      // },{
      //   path: '/secret',
      //   name: '/secret',
      //   component: Secret,
      //   layout: false,
      // },{
      //   path: '/basic',
      //   name: '/basic',
      //   component: Basic,
      //   layout: false,
      // },{
      //   path: '/history',
      //   name: '/history',
      //   component: History,
      //   layout: false
      // },{
      //   path: '/hobby',
      //   name: '/hobby',
      //   component: Hobby,
      //   layout: false,
      // },{
      //   path: '/member',
      //   name: '/member',
      //   component: Member,
      //   layout: false
      // },{
      //   path: '/identification',
      //   name: '/identification',
      //   component: Identification,
      //   layout: false
      // },{
      //   path: '/message',
      //   name: '/message',
      //   component: Message,
      //   layout: false,
      });


    addTabBar({
        key: '/members',
        name: '姐妹',
        icon: female,
        selectIcon: femaleSelected,
    },{
        key: '/mediators',
        name: '中保',
        icon: mediator,
        selectIcon: mediatorSelected,
    },{
        key: '/topics',
        name: '话题',
        icon: topic,
        selectIcon: topicSelected,
    },{
        key: '/personal',
        name: '我的',
        icon: my,
        selectIcon: mySelected
    }
  );

    app.model(require('./models/members'));
    app.model(require('./models/mediators'));
    app.model(require('./models/topics'));
    app.model(require('./models/personal'));

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
