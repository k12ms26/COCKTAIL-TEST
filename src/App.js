import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
import Header from './common/header.js'
import Footer from './common/footer.js'
import Test from './components/test.js'
import Result from './components/result.js'
import Home from './components/home.js'
import NotFound from './components/notFound.js'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/test" component = {Test} />
          <Route path = "/result" component = {Result} />
          <Route path = "/*" component = {NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}