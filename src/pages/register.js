import dva from 'dva';
import createLoading from 'dva-loading';
import { Router, Route, IndexRedirect } from 'dva/router';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import { addRoute, getRoutes } from '../framework/config/RouteHolder';
import framework from '../framework/index';
import register from '../register/index';
import './index.css';

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

register.init(app);

// 2. Plugins
// app.use({});
app.use(createLoading());

app.router(({ history }) => {
  return (
    <Router history={history} routes={getRoutes()} />
  )
});

app.start('#root');
