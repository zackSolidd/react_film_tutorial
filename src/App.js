import React, { Component } from 'react'
import './App.css';

import FilmListing from "./FilmListing"
import FilmDetails from "./FilmDetails"
import TMDB from "./TMDB"

export default class App extends Component {
  state = {
    films: TMDB,
    faves: [],
    current: {},
  }

  handleFaveToggle = (filmObject) => {
    let faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(filmObject);

    if (filmIndex === -1) {
      console.log(filmObject + " added to faves ");
      faves.push(filmObject);
      this.setState({ faves });
    } else {
      console.log(filmObject + " removed to faves ");
      faves.splice(filmIndex,1);
      this.setState({ faves });
    }

  };

  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film);
    this.setState({current : film})
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing 
        movie = {this.state.films} faves = {this.state.faves} onFaveToggle = {this.handleFaveToggle} handleDetailsClick = {this.handleDetailsClick}/>

        <FilmDetails current = {this.state.current} />
      </div>
    )
  }
}


