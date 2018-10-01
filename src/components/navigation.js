import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li><a href="#">What?</a></li>
          <li><a href="#">+ New Game</a></li>
        </ul>
      </nav>
    );
  }
}