import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({movies = [], setMovieId}) => {
  return (<section class="section-movie-list">
    {movies.length ? movies.map(m => 
          <Link to="/movie" onClick={ () => { setMovieId(m.imdbID) } }>
            <img src={m.Poster} class="movie-item" alt={m.Title} />
          </Link>) : ''}
    </section>
  )
  
  
}

export default MovieList