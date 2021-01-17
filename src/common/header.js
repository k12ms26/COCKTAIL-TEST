import React from 'react';
import '../index.css';
import { Link } from '@version/react-router-v3'
export default class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h2><Link to="home" className='link'>Cocktail Test</Link></h2>
        </header>
      </div>
    );
  }
}