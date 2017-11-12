import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import './index.css';
import reducers from './reducers';
import HOME from './App';
import registerServiceWorker from './registerServiceWorker';


const HISTORY = createHistory();
const MIDDLEWARE = routerMiddleware(HISTORY);
const STORE = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(MIDDLEWARE),
);

ReactDOM.render(
  <Provider store={STORE}>
    <ConnectedRouter history={HISTORY}>
      <div>
        <Route exact path="/" component={HOME} />
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
