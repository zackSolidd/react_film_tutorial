import React, { Component } from 'react'

export default class FilmPoster extends Component {
    render() {
        const url = "https://image.tmdb.org/t/p/w780"
        return (
            <div>
                <img src={url+this.props.poster} alt="" />
            </div>
        )
    }
}
