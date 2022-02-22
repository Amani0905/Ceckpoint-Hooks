import {useState} from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
   
  return (
    <div>
        {movies.map(mv=> <MovieCard mv={mv} /> )}
        
    </div>
  )
}
export default MovieList