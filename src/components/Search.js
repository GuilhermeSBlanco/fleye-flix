import React, { useState } from 'react'

const Search = ({movies = [], setMovies, setLoading}) => {
    const [searchKey, setSearchKey] = useState('')

    const handleInput = (e) => {
        setSearchKey(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(e.target.value)
        return fetch('http://www.omdbapi.com/?apikey=925eba28&s=' + searchKey)
        .then(r => r.json())
        .then (m => {
            setMovies(m.Search)
            setLoading(false)
        })       
    }

    return (
        <section class="search-section" onSubmit={handleSearch}>
            <div class="search-app-cover">
                <div class="color-fade"></div>
            </div>
            {movies.length || <div class="search-title ">
                <h1>Unlimited movies and series</h1>
                <p>Find your favorite movies and TV shows in one place</p>
            </div>}
            <form action="#" >
                <input 
                  type="text" 
                  autoComplete="off" 
                  onChange={handleInput}
                  placeholder="Search"
                />

                {movies.length || <button>Search</button>}
            </form>
            
        </section>
    )
}

export default Search