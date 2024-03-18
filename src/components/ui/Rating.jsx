import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function rating({ rating }) {
  return (
    <div className="book__ratings">
        {
          new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
        }
        {
          !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
        {/* For ratings that are not whole numbers, we can use Math.floor() to get the full stars */}
        {/* Then use Number.isInteger() to determine whether or not we need to print a half star. In this case, we want to print when the rating is NOT an integer. */}
        {/* If the element doesn't need to be called for any use, we can just use "_" to fill it. */}
      </div>
  )
}

export default rating;