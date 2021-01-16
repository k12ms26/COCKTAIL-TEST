import React from 'react';
import './App.css';
import { Link } from '@version/react-router-v3'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div>  
          <ul className="Link">
            <li><Link to="home">Home</Link></li>
            <li><Link to="test">Test</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}