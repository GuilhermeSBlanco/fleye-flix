import React, {useState} from 'react'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieInfo from './pages/MovieInfo'
import SearchApp from './components/SearchApp'
import FavMovies from './pages/FavMovies'
import './App.css'


const App = () => {
    const [movies, setMovies] = useState([])
    const [favList, setFavList] = useState([])
    const [movieId, setMovieId] = useState([]);
    
    return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<SearchApp movies={movies} setMovies={setMovies} setMovieId={setMovieId}/> } />
              <Route path="/movie" element={<MovieInfo movieId={movieId} favList={favList} setFavList={setFavList}/>} />
              <Route path="/fav" element={<FavMovies movies={favList} setMovieId={setMovieId} />} />
          </Routes>
          <Footer />
        </Router>  
      </>      
    )
  }

export default App;
