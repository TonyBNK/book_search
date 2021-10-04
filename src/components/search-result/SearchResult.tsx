import c from "./SearchResult.module.scss";
import React, {useMemo} from "react";
import {BookCard} from "../book-card/BookCard";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {Preloader} from "../preloader/Preloader";
import {BookType, CommonSearchType} from "../../types/types";


export const SearchResult = React.memo(() => {
    const {
        books,
        totalCount,
        isResultShown,
        isFetching
    } = useSelector<RootStateType, CommonSearchType>(
        state => state.books.commonSearch
    );

    const booksCards = useMemo(() => {
        return books.map((book: BookType) =>
            <BookCard
                id={book.id}
                image={book.image}
                title={book.title}
                categories={book.categories}
                authors={book.authors}
            />
        );
    }, [books]);

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
});