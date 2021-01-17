import React from 'react';
import './App.css';
import Header from './common/header.js'
import Footer from './common/footer.js'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}