import Reviewbox from './Reviewbox';
import React from 'react';
import Reviewsection  from './Reviewsection.json';
const Review = () => {
    return (
        <div id='Review'> 
        <h2>Review section</h2>
        <div className="reviewin">
           {Reviewsection.map((review) => (<Reviewbox review={review}/>))}
        </div></div>
      );
}
 
export default Review;