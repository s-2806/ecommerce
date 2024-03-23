import React from 'react';
const Cards = ({ booksBS }) => {
   
    const cart= "https://th.bing.com/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?rs=1&pid=ImgDetMain"
    let heart="https://www.pngitem.com/pimgs/m/527-5277906_white-heart-vector-png-transparent-png.png"
    return (
    booksBS.map((book) => (
        <div className="card" key={book.id}>
            <img src={book.image} alt="book cover" className='bookcover'/>
            <h2>{ book.name }</h2>
            <p>{ book.author }</p>
            <p>Price : ₹ { book.price }</p>
            <button className='buynow'>Buy Now</button>
            <br/>
            <button ><img src={cart} className='cartpic' /></button>
            <button><img src={heart} alt="heartu"  className='heart' /></button>
        </div>
    ))
    );
}
 
export default Cards;