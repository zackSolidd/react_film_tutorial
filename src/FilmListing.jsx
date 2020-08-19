import FilmRow from "./FilmRow"

import React, { Component } from 'react'

export default class FilmListing extends Component {
    state = {
        filter: 'all',
    };

    handleFilterClick = (allFave) => {
        console.log("Setting filter to " + allFave);

        this.setState({filter : allFave});
    };

    render() {
        // const allFilms = this.props.movie.films.map((Films)=> (
        //     <FilmRow key = {Films.id} movie = {Films}/>
        // ))
        const allFilms = this.props.movie.films.map((film) => {
            return (
              <FilmRow
                film={film}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)}
                isFave={this.props.faves.includes(film)}
                handleDetailsClick = {this.props.handleDetailsClick}
              />
            );
        });
        const favFilms = this.props.faves.map((film) => {
            return (
              <FilmRow
                film={film}
                key={film.id}
                onFaveToggle={() => this.props.onFaveToggle(film)}
                isFave={this.props.faves.includes(film)}
                handleDetailsClick = {this.props.handleDetailsClick}
              />
            );
        });
        const isAll = (this.state.filter) === 'all' ? 'is-active' : ''
        const isFave = (this.state.filter) === 'faves' ? 'is-active' : ''
        // console.log(this.props.movie);
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${isAll} `} onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.movie.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${isFave} `} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>
                {this.state.filter === 'all' ? allFilms : favFilms}
            </div>
        )
    }
}




