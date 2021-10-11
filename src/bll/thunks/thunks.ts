import {AppThunkType, BookFromAPIType, BookType} from "../../types/types";
import {searchAPI} from "../../api/api";
import {
    setBooks,
    setExtraBooks,
    setFetching,
    setShown,
    setSpecificBook
} from "../action-creators/actionCreators";
import {
    bookTypeFormatter,
    checkBooksCategories,
    specificBookTypeFormatter
} from "../utils/utils";


export const showBooks = (
    bookTitle: string,
    page: number,
    cleanUp: boolean,
    sorting: string,
    category: string,
    extraBooksFromState: Array<BookFromAPIType>
):AppThunkType => {
    let books: Array<BookFromAPIType>;
    let step = 30;
    let noData = false;
    let currentPage = page;

    const checkNumberOfBooks = async (books: Array<BookFromAPIType>, checkBooks: (books: Array<BookFromAPIType>, category: string) => Array<BookFromAPIType>) => {
        books = [...checkBooks(books, category)];

        if (noData) {
            return books;
        }

        if (books.length < step) {
            const response = await searchAPI.getBooks(bookTitle, currentPage += step, sorting);

            if (response.data.items) {
                response.data.items.length < step ? noData = true : noData = false;

                books = await checkNumberOfBooks([...books, ...response.data.items], checkBooks);
            }
        }

        return books;
    }

    return async (dispatch) => {
        try {
            dispatch(setFetching(true));

            const response = await searchAPI.getBooks(bookTitle, currentPage, sorting);

            if (response.data.items) {
                books = [...extraBooksFromState, ...response.data.items];

                if (category !== 'all') {
                    books = await checkNumberOfBooks(books, checkBooksCategories);
                }

            } else {
                if (extraBooksFromState.length !== 0) {
                    books = [...extraBooksFromState];
                } else {
                    books = [];
                    noData = true;
                }
            }

            const extraBooks = books.splice(step);

            const totalCount = (books.length === 0 && noData) && response.data.totalItems === 0
                ? 0
                : response.data.totalItems

            const booksForUI = books.map((book: BookFromAPIType): BookType => bookTypeFormatter(book));

            if (booksForUI.length < step) {
                noData = true;
            }

            dispatch(setFetching(false));

            dispatch(setBooks(bookTitle, booksForUI, totalCount, currentPage, cleanUp));

            dispatch(setExtraBooks(extraBooks, currentPage));

            noData || !totalCount
                ? dispatch(setShown(false, true))
                : dispatch(setShown(true, true));

        } catch (err) {
            console.log('error ', err);
        }
    }
}

export const showSpecificBook = (bookId: string): AppThunkType => {
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            const response = await searchAPI.getSpecificBook(bookId);

            if (response.data) {
                const bookData = specificBookTypeFormatter(response.data);

                dispatch(setSpecificBook(bookData));
                dispatch(setFetching(false));
            }
        } catch (err) {
            console.log('error ', err);
        }
    }
}
