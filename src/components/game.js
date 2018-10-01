import React, { Component } from 'react';
import GuessBox from './guessBox';

export default class Infobox extends Component {
  render() {
    return (
      <section className="game">

        <h2>Make your Guess!</h2>

        <form>
          <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
          <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>

        <p>Guess #<span id="count">0</span>!</p>
        <GuessBox />
      </section>
    );
  }
}