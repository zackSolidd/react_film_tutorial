import React from 'react'

function FilmPoster(props) {
    const url = "https://image.tmdb.org/t/p/w780"
    return (
        <div>
            <img src={url+props.poster} alt="" />
        </div>
    )
}

export default FilmPoster

