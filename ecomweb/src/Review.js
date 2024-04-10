import Reviewbox from './Reviewbox';
import Reviewsection  from './Reviewsection.json';
const Review = () => {
    return (
        <div className='Review'> 
        <h2>Review section</h2>
         {Reviewsection.map((review) => (<Reviewbox opinion={review}/>))}
        </div>
      );
}
 
export default Review;