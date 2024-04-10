import { useEffect } from 'react';
import { useState } from 'react';
import Cards from './Cards';
import bestsellers from'./bestsellers.json';

 const Bestsellers = () => {
//     const [booksBS, setBooksBS] = useState(null);
//      useEffect(() => {
//              fetch('http://localhost:8000/bestsellers')
//                 .then(res => {
//                     return res.json();
//                 })
                
//                 .then(data => {
//                     console.log(data);
//                     setBooksBS(data);
//                 })
//         },[]);
    return ( 
        <div className="Bestsellers" id='Bestsellers'>
            <h2 className="headingbestsellers">Bestsellers</h2>
          <div className='bestsellersparent'> <Cards booksBS={ bestsellers }/> </div>
        </div>
     );
}
 
export default Bestsellers;