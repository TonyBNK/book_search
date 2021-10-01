import React from "react";
import c from './BookCard.module.scss';
import {BookType} from "../../bll/booksReducer";


export const BookCard: React.FC<BookType> = (
    {
        image,
        title,
        authors,
        categories
    }
) => {
    const categoryForBookCard = categories ? categories[0] : '';

    return (
        <div className={c.bookCard}>
            <img src={image} alt="КНИГА"/>
            <h3>{title}</h3>
            <p>{categoryForBookCard}</p>
            <p>{authors}</p>
        </div>
    )
}