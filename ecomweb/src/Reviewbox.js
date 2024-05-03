const Reviewbox = ({review}) => {
    return (  
        <div className='Reviewseperate'>
          <div className="reviewimg"> <div> <img src={review.image} alt={review.book} /></div><div>Rating:{review.rating}</div></div>
          <div> 
            <p>{review.comment}</p></div>
        </div>
    );
}
 
export default Reviewbox;