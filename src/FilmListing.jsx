import FilmRow from "./FilmRow"

import React, { Component } from 'react'

export default class FilmListing extends Component {
    render() {
        const allFilms = this.props.movie.films.map((Films)=> (
            <FilmRow key = {Films.id} movie = {Films}/>
        ))
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}
