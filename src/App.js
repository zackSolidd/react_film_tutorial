import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

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
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({current : film})
    })

  };


  render() {
    return (
      <div className="film-library">
        <FilmListing 
        movie = {this.state.films} faves = {this.state.faves} onFaveToggle = {this.handleFaveToggle} handleDetailsClick = {this.handleDetailsClick}/>

        <FilmDetails film = {this.state.current} />
      </div>
    )
  }
}


