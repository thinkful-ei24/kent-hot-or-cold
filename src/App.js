import React, { Component } from 'react';
import Navigation from './components/navigation';
import Infobox from './components/infobox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Infobox />
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
