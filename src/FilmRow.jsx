import FilmPoster from './FilmPoster';
import Fave from "./Fave"

import React from 'react';

function FilmRow(props) {
    const year = new Date(props.film.release_date);
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
            <FilmPoster poster = {props.film.poster_path}/>

            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{year.getFullYear()}</p>
                <Fave onFaveToggle = {props.onFaveToggle} isFave={props.isFave} />
            </div>
        </div>
    )
}

export default FilmRow
