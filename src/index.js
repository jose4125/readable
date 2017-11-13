import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import HOME from './containers/Home';
import CATEGORY from './containers/Category';
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
      <div>
        <Route exact path="/" component={HOME} />
        <Route path="/:category" component={CATEGORY} />
      </div>
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
