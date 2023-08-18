import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import FavButton from '../components/FavButton'

const MovieInfo = ({ movieId, favList=[], setFavList, setLoading}) => {
   
  const [info, setInfo] = useState({})
  
  const navigate = useNavigate()

  const fetchData =  async () => {
    setLoading(true)
    const data = await fetch('https://www.omdbapi.com/?apikey=925eba28&i=' + movieId + '&plot=full')
    const json = await data.json()
    setInfo(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <header>
        <Link to="/" onClick={() => { navigate(-1) }}>
          <svg width="40" height="40" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 20H13M13 20L20 27M13 20L20 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </header>

      <section class="movie-info">
        <section class="movie-info-title">
          <h3>{info.Title}</h3>
          <span>{info.Year}  ●  {info.Runtime}</span>
        </section>
        <section class="movie-info-poster">
          <img src={info.Poster} />
        </section>  
        <section class="movie-info-opt">
          <button class="btn-watch">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16675 2.5L15.8334 10L4.16675 17.5V2.5Z" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Watch
          </button>
          <FavButton movieInfo={info} favList={favList} setFavList={setFavList}/>
        </section>
        <section class="movie-info-desc">
          <p class="info-genre-opt">{info.Genre}</p>
          <p>Director: {info.Director}</p>
          <p>{info.Plot}</p>
        </section>
      </section>
    </main>
  )
}

export default MovieInfo