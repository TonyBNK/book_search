import c from "./SearchResult.module.scss";
import React from "react";
import {BookCard} from "../book-card/BookCard";
import {BooksStateType, BookType} from "../../bll/booksReducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Preloader} from "../preloader/Preloader";
import {Grid} from "@mui/material";


export const SearchResult = () => {
    const {
        books,
        totalCount,
        isShown,
        isFetching
    } = useSelector<RootStateType, BooksStateType>(
        state => state.books
    );

    const booksCards = books.map((book: BookType) =>
        <BookCard
            id={book.id}
            image={book.image}
            title={book.title}
            categories={book.categories}
            authors={book.authors}
        />
    )

    return (
        <>
            <div className={c.searchResult}>
                <div className={c.totalCount}>
                    {
                        isShown
                            ? `Found ${totalCount} results`
                            : ''
                    }
                </div>

                <div className={c.booksContainer}>
                    {isShown && booksCards.length === 0 ? 'There are no books with these filters' : booksCards}
                </div>

            </div>
            {isFetching ? <Preloader/> : null}
        </>
    )
}