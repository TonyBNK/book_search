import React from "react";
import c from './BookCard.module.scss';
import {BookType} from "../../bll/booksReducer";


export const BookCard: React.FC<BookType> = (
    {
        id,
        image,
        title,
        authors,
        categories
    }
) => {
    return (
        <div
            key={id}
            className={c.bookCard}
        >
            <img src={image} alt="book"/>
            <h4>{title}</h4>
            <p>{categories[0]}</p>
            <p>{authors.join(', ')}</p>
        </div>
    )
}