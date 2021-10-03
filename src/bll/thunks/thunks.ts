import {BookType, ShowBooksType, ShowSpecificBookType} from "../../types/types";
import {searchAPI} from "../../api/api";
import {
    setBooks,
    setExtraBooks,
    setFetching, setShown, setSpecificBook
} from "../action-creators/actionCreators";
import {checkBooksCategories} from "../utils/utils";
import emptyBook from "../../images/emptyBook.jpg";


export const showBooks: ShowBooksType = (
    bookTitle,
    page,
    cleanUp,
    sorting,
    category,
    extraBooksFromState
) => {
    let books: Array<BookType>;
    let step = 30;
    let noData = false;
    let currentPage = page;

    const checkNumberOfBooks = async (books: Array<any>, checkBooks: (books: Array<any>, category: string) => Array<any>) => {
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

            const booksForUI = books.map((book: any) => {
                return {
                    id: book.id,
                    image: book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : emptyBook,
                    title: book.volumeInfo.title,
                    categories: book.volumeInfo.categories
                        ? book.volumeInfo.categories
                        : [''],
                    authors: book.volumeInfo.authors
                        ? book.volumeInfo.authors
                        : ['']
                }
            });

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

export const showSpecificBook: ShowSpecificBookType = (bookId) => {
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            const response = await searchAPI.getSpecificBook(bookId);

            if (response.data) {
                const bookData = {
                    id: response.data.id,
                    image: response.data.volumeInfo.imageLinks
                        ? response.data.volumeInfo.imageLinks.small
                        : emptyBook,
                    title: response.data.volumeInfo.title,
                    categories: response.data.volumeInfo.categories
                        ? response.data.volumeInfo.categories
                        : [''],
                    authors: response.data.volumeInfo.authors
                        ? response.data.volumeInfo.authors
                        : [''],
                    description: response.data.volumeInfo.description
                        ? response.data.volumeInfo.description
                        : ''
                };

                dispatch(setSpecificBook(bookData));
                dispatch(setFetching(false));
            }
        } catch (err) {
            console.log('error ', err);
        }
    }
}
