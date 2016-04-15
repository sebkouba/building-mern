import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './routes'

//let store = createStore(todoApp);

const store = createStore(todoApp,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );

render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
    document.getElementById('app')
);

//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('app')
//);
