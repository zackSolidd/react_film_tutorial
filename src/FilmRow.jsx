import FilmPoster from './FilmPoster';

import React, { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        const year = new Date(this.props.movie.release_date);
        return (
            <div className="film-row">
                <FilmPoster poster = {this.props.movie.poster_path}/>

                <div className="film-summary">
                    <h1>{this.props.movie.title}</h1>
                    <p>{year.getFullYear()}</p>
                </div>
            </div>
        )
    }
}

