import { React } from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from '../routes/App';
import Demo from '../routes/Demo';
import NotFound from '../routes/NotFound';
import MainLayout from '../layout/MainLayout'

let layout = MainLayout;

const routeList = [
  {
    path: '/index',
    name: '/index',
    component: Demo,
  }
];

const routes = [
  {
    index: 0,
    path: '/',
    name: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('/index') },
    component: App,
    childRoutes: routeList,
  },
  {
    index: 99999,
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
];

export function registerLayout(val) {
  layout = val;
}

export function getLayout() {
  return layout;
}

export function addExtRoute(...route) {
  route.map(r => {
    const index = routes.findIndex((item) => item.path === r.path);
    index > -1 && routes.splice(index, 1);
  });
  routes.push(...route);
}

export function addRoute(...route) {
  route.map(r => {
    const index = routeList.findIndex((item) => item.path === r.path);
    index > -1 && routeList.splice(index, 1);
  });
  routeList.push(...route);
}

export function getRoutes() {
  return routes.sort((a, b) => { return a.index > b.index ? 1 : -1; });
}
