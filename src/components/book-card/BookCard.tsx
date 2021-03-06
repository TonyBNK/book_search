import React, {Dispatch, useCallback} from "react";
import c from './BookCard.module.scss';
import {Paper} from "@mui/material";
import {AppThunkType, BookType} from "../../types/types";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {showSpecificBook} from "../../bll/thunks/thunks";


export const BookCard: React.FC<BookType> = React.memo((
    {
        id,
        image,
        title,
        authors,
        categories
    }
) => {
    const haveCategory = categories ? categories[0] !== '' : false;
    const haveAuthors = authors ? authors[0] !== '' : false;
    const history = useHistory();
    const dispatch = useDispatch<Dispatch<AppThunkType>>();

    const onBookCardClickHandler = useCallback(() => {
        history.push('/specific-book');
        dispatch(showSpecificBook(id));
    }, [dispatch, history, id]);

    return (
        <Paper
            elevation={3}
            className={c.paper}
        >
            <div
                key={id}
                className={c.bookCard}
                onClick={onBookCardClickHandler}
                style={{padding: '20px'}}
            >
                <img src={image} alt="book"/>
                <h4>{title}</h4>
                <span className={c.description}>
                    {haveCategory ? `Category: ${categories[0]}` : ''}
                </span>
                <span className={c.description}>
                    {haveAuthors ? `Authors: ${authors.join(', ')}` : ''}
                </span>
            </div>
        </Paper>
    )
});