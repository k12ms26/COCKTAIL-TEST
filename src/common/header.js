import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h2><Link to="/" className='link'>Cocktail Test</Link></h2>
        </header>
      </div>
    );
  }
}