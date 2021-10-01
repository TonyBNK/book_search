import c from "./SearchResult.module.scss";
import React from "react";
import {BookCard} from "../book-card/BookCard";
import {BookType} from "../../bll/booksReducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";


export const SearchResult = () => {
    const selectedBooks = useSelector<RootStateType, Array<BookType>>(
        state => state.books.books
    );

    const booksCards = selectedBooks.map((book: BookType) =>
        <BookCard
            image={book.image}
            title={book.title}
            categories={book.categories}
            authors={book.authors}
        />
    )

    return (
        <div className={c.searchResult}>
            {booksCards}
        </div>
    )
}