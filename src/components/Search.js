import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Search = ({getData,dataRate,star}) => {
  const [rating, setRating] = useState(5)
  const onStarClick=(nextValue, prevValue, name)=> {
    dataRate(nextValue);
  }
  return (
    <div>
      <input type="text" placeholder="search" style={{marginLeft:'20px'}} onChange={ (e)=>getData(e.target.value)}/>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={star}
          onStarClick={onStarClick}

        />
    </div>
  )
}

export default Search