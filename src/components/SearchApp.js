import React from "react"
import Header from './Header'
import MovieList from './MovieList'
import Search from './Search'


const SearchApp = ({movies, setMovies, setMovieId}) => {
  return (
      <main>
        <Header />
        <Search movies={movies} setMovies={setMovies}/>
        <MovieList movies={movies} setMovieId={setMovieId} />
      </main>
  )
}

export default SearchApp