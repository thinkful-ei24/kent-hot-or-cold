import React, { Component } from 'react';
import Navigation from './navigation';
import Infobox from './infobox';
import Logo from './logo';
import Game from './game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Infobox />
        <Logo />
        <Game />
      </div>
    );
  }
}

export default App;
