import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import HOME from './containers/Home';
import CATEGORY from './containers/Category';
import POST from './containers/Post';
import CREATEEDITPOST from './containers/CreateEditPost';
import NOTFOUND from './containers/NotFound';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const HISTORY = createHistory();
const MIDDLEWARE = routerMiddleware(HISTORY);
const STORE = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(MIDDLEWARE, logger, thunk),
  ),
);

ReactDOM.render(
  <Provider store={STORE}>
    <ConnectedRouter history={HISTORY}>
      <Switch>
        <Route exact path="/" component={HOME} />
        <Route path="/post/new" component={CREATEEDITPOST} />
        <Route path="/post/:id/edit" component={CREATEEDITPOST} />
        <Route path="/:category/:id" component={POST} />
        <Route exact path="/notfound" component={NOTFOUND} />
        <Route path="/:category" component={CATEGORY} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
/*
ReactDOM.render(
  <App />, document.getElementById('root')
);

*/
registerServiceWorker();
