import dva from 'dva';
import createLoading from 'dva-loading';
import { Router, Route, IndexRedirect } from 'dva/router';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import { addRoute, getRoutes } from '../framework/config/RouteHolder';
import framework from '../framework/index';
import main from '../main/index';
import './index.css';

//for test
import token from '../framework/utils/token';
token.save('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRJZCI6ODc2NzA4MDgyNDM3MTk3ODI0LCJ1c2VySWQiOjEsImFjY291bnQiOiJhZG1pbiIsImlhdCI6MTQ5OTY4ODY5MiwianRpIjoiMSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNDk5OTQ3ODkyfQ.dCDjIhG4xM8nTdvN8NDWemE72ku9AzXLBsVWOJqqKpoSW1_fcDiDRH_zCjvEX4r0A5IwctrpzpHmt6DzxIdg3g');
//end

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  onError(e) {
    console.log(e.message);
  }
});

framework.init(app, {
  demo: false,
});

main.init(app);

// 2. Plugins
// app.use({});
app.use(createLoading());


addRoute({
  path: '/index',
  name: '/index',
  indexRoute: { onEnter: (nextState, replace) => replace('/members') }
});

app.router(({ history }) => {
  return (
    <Router history={history} routes={getRoutes()} />
  )
});

app.start('#root');
