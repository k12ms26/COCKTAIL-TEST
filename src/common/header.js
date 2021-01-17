import React from 'react';
import '../index.css';
import { Link } from '@version/react-router-v3'

export default class Header extends React.Component {

  render() {
    return (
        <div>  
            <ul className="header">
                <li><Link to="home">Home</Link></li>
                <li><Link to="test">Test</Link></li>
            </ul>
        </div>
    );
  }
}