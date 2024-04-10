import React from 'react';
import { useState } from 'react';
import { Card } from './Card';
const Cards = ({ booksBS }) => {

   

    return (
    booksBS.map((book) => (
           <Card book={book} key={book.id} />
    ))
    );
}
 
export default Cards;