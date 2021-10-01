import c from "./SearchResult.module.scss";
import React from "react";
import {BookCard} from "../book-card/BookCard";
import {BookType, Nullable} from "../../bll/booksReducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";


export const SearchResult = () => {
    const selectedBooks = useSelector<RootStateType, Array<BookType>>(
        state => state.books.books
    );
    const totalCount = useSelector<RootStateType, Nullable<number>>(
        state => state.books.totalCount
    );

    const booksCards = selectedBooks.map((book: BookType) =>
        <BookCard
            id={book.id}
            image={book.image}
            title={book.title}
            categories={book.categories}
            authors={book.authors}
        />
    )

    console.log(selectedBooks);

    return (
        <div className={c.searchResult}>
            <div className={c.totalCount}>
                {totalCount}
            </div>
            <div className={c.booksContainer}>
                {booksCards.length === 0 ? 'There are no books with these filters' : booksCards}
            </div>
        </div>
    )
}