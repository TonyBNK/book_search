import React from "react";
import c from './BookCard.module.scss';
import {BookType} from "../../bll/booksReducer";
import {Paper} from "@mui/material";


export const BookCard: React.FC<BookType> = (
    {
        id,
        image,
        title,
        authors,
        categories
    }
) => {
    const haveCategory = categories[0] !== '';
    const haveAuthors = authors[0] !== '';

    return (
        <Paper
            elevation={3}
            style={{padding: '20px'}}
            className={c.paper}
        >
            <div
                key={id}
                className={c.bookCard}
            >
                <img src={image} alt="book"/>
                <h4>{title}</h4>
                <span className={c.description}>
                    {haveCategory ? `Категория: ${categories[0]}` : ''}
                </span>
                <span className={c.description}>
                    {haveAuthors ? `Авторы: ${authors.join(', ')}` : ''}
                </span>
            </div>
        </Paper>
    )
}