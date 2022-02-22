import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({mv}) => {
  return (
    <div>
     <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={mv.posterURL}/>
      <h1>{mv.title}</h1>
      <h4>{mv.year}</h4>
      <span className="minutes">{mv.type}</span>
      <p className="type">{mv.genre}</p> 
    </div>
    <div className="movie_desc">
      <p className="text">{mv.description}</p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={mv.rate}
        />
        <li><i className="material-icons">star</i></li>
        
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div><a className="link">BERRY AND CHERRY VISION</a> 
</div>
  )
}
export default MovieCard
