import React from 'react';
import '../index.css';
import { Link } from '@version/react-router-v3'

export default class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h2>Cocktail Test</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/test">Test</a></li>
          </ul>
        </header>
      </div>
    );
  }
}