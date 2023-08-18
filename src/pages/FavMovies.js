import React from 'react'
import MovieList from '../components/MovieList'

const FavMovies = ({ movies, setMovieId }) => {
  return (
    <main>
      <header>
        <h2 class="fav-title">Your favorites</h2>
      </header>
      
      <MovieList movies={movies} setMovieId={setMovieId}/>
    </main>
  )
}

export default FavMovies