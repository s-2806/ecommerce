import React from 'react';
const Cards = (props) => {
    const { booksBS } = props;
    const redheart = () => {
       heart = "https://th.bing.com/th/id/OIP.6GopcRTRI6v7uXLQuNyEBQHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
    let heart="https://www.pngitem.com/pimgs/m/527-5277906_white-heart-vector-png-transparent-png.png"
    return (
    booksBS.map((book) => (
        <div className="card" key={book.id}>
            <img src={book.image} alt="book cover" />
            <h2>{ book.title }</h2>
            <p>{ book.author }</p>
            <p>{ book.price }</p>
            <button>Buy Now</button>
            <button>Add to cart</button>
            <img src={heart} alt="heartu" onClick={ redheart} className='heart' />
        </div>
    ))
    );
}
 
export default Cards;