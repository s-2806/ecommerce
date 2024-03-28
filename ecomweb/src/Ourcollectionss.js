import Cards from './Cards';
import Ourcollection from './Ourcollection';
const Ourcollectionss = () => {
    return ( 
       <div className='collection'> <h2>Our Collection</h2> 
        <div className="Ourcollection">
            <Cards booksBS={Ourcollection}/>
            </div></div>
    );
}
 
export default Ourcollectionss;