import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import jQuery from 'jquery';
import Popper from 'popper.js';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

window.$ = window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap');

const createStoreWithMiddleware =
      applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Timer} />
            <Route path="/countdown" component={Countdown} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
