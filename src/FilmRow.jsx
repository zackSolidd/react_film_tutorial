import FilmPoster from './FilmPoster';
import Fave from "./Fave"

import React, { Component } from 'react'

export default class FilmRow extends Component {
    render() {
        const year = new Date(this.props.film.release_date);
        return (
            <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
                <FilmPoster poster = {this.props.film.poster_path}/>

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year.getFullYear()}</p>
                    <Fave onFaveToggle = {this.props.onFaveToggle} isFave={this.props.isFave} />
                </div>
            </div>
        )
    }
}

