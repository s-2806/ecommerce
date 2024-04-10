const Reviewbox = ({review}) => {
    return (  
        <div className='Reviewseperate'>
          <div>  <img src={review.image} alt={review.name} /></div>
          <div>  <h3>{review.name}</h3>
            <p>{review.opinion}</p></div>
        </div>
    );
}
 
export default Reviewbox;