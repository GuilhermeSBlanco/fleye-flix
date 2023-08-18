import React from 'react'

const FavButton = ({ movieInfo, favList, setFavList }) => {
  const isMovieOnFavList = () => {
      return !favList.find(i => i.imdbID == movieInfo.imdbID)
  }

  const addToFavList = () => {
    setFavList([...favList, movieInfo])
    console.log(favList)
  }

  const removeFromFavList = () => {
    let newFavList = favList.filter(i => i.imdbID != movieInfo.imdbID)
    setFavList(newFavList)
    console.log(favList)
  }

  return (
    isMovieOnFavList() ? <button class="btn-add" onClick={addToFavList}>+ Add to favorites</button>
                     : <button class="btn-add" onClick={removeFromFavList}>- Remove from favorites</button>      
)

}

export default FavButton