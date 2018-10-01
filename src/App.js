import React, { Component } from 'react';
import Navigation from './components/navigation';
import Infobox from './components/infobox';
import Logo from './components/logo';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Infobox />
        <Logo />
        <Game />
        {/* Navigation
          InfoBox?
          Logo
          Game
          GuessList */}
      </div>
    );
  }
}

export default App;
