import React, {useState} from 'react';
import '.././css/starRating.css';

const StarRating = ({totalStars,rating}) => {
    const [rate, setRate] = useState(rating);

    const handleRating = (e) => {
        setRate(e.target.getAttribute('data'));
    }
   return (
    <div onClick={handleRating}>
        {[...new Array(totalStars).keys()].map(i => (
            <span key={i} data={i+1} className={i< rate? 'star-rating': 'star'}></span>
        ))}
    </div>
  )
}

export default StarRating;




// {[...new Array(totalStars)].map((n,i) => (
//     <span key={i} className={i < rate ? ''} onClick={() => setRate(i + 1)}>⭐️</span>
// ))}