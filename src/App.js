import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade">
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/test" component = {Test} />
              <Route path = "/result" component = {Result} />
              <Route path = "/*" component = {NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}