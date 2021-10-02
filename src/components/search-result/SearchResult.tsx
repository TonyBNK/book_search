import c from "./SearchResult.module.scss";
import React from "react";
import {BookCard} from "../book-card/BookCard";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Preloader} from "../preloader/Preloader";
import {BooksStateType, BookType} from "../../types/types";


export const SearchResult = () => {
    const {
        books,
        totalCount,
        isResultShown,
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
    );

    return (
        <>
            <div className={c.searchResult}>
                <div className={c.totalCount}>
                    {
                        isResultShown
                            ? `Found ${totalCount} results`
                            : ''
                    }
                </div>

                <div className={c.booksContainer}>
                    {isResultShown && booksCards}
                </div>

            </div>
            {isFetching ? <Preloader/> : null}
        </>
    )
}