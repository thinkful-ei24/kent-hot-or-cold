import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li><a className="what" href="#">What ?</a></li>
          <li><a className="new" href="#">+ New Game</a></li>
        </ul>
      </nav>
    );
  }
}