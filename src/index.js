import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router, Route, IndexRoute, browserHistory } from '@version/react-router-v3';

import './index.css';
import App from './App';
import Test from './components/test'
import Result from './components/result'
import Home from './components/home'

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "test" component = {Test} />
        <Route path = "result" component = {Result} />
      </Route>
  </Router>

  , document.getElementById('root')
);