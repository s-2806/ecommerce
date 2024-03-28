import React from 'react';
import { useState } from 'react';
const Cards = ({ booksBS }) => {
    const[image,setImage]=useState('https://www.pngitem.com/pimgs/m/527-5277906_white-heart-vector-png-transparent-png.png')

    function imagechange(){
        setImage('https://tse2.mm.bing.net/th?id=OIP.3sJ3uS_HeV1tERAYeFy12QHaHa&pid=Api&P=0&h=180')
    }
   
    const cart= "https://th.bing.com/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?rs=1&pid=ImgDetMain"
    let heart="https://www.pngitem.com/pimgs/m/527-5277906_white-heart-vector-png-transparent-png.png"
    let redheart="https://tse2.mm.bing.net/th?id=OIP.3sJ3uS_HeV1tERAYeFy12QHaHa&pid=Api&P=0&h=180"
    return (
    booksBS.map((book) => (
        <div className="card" key={book.id}>
            <img src={book.image} alt="book cover" className='bookcover'/>
            <h3>{ book.name }</h3>
            <p>{ book.author }</p>
            <p>Price : ₹ { book.price }</p>
            <button className='buynow'>Buy Now</button>
            <br/>
            <button className='cart'><img src={cart} className='cartpic' /></button>

            <button className='liked'><img src={image} alt="heartu"  className='heart' onClick={imagechange} /></button>
           
        </div>
    ))
    );
}
 
export default Cards;