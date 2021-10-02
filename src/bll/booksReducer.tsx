import {searchAPI} from "../api/api";
import emptyBook from "../images/emptyBook.jpg";
import {
    BooksActionsType,
    BooksStateType,
    BookType,
    ShowBooksType
} from "../types/types";


export const setBooks = (
    searchStr: string, books: Array<BookType>, totalCount: number,
    currentPage: number, cleanUp: boolean
) => ({
    type: 'SET-BOOKS',
    searchStr,
    books,
    totalCount,
    currentPage,
    cleanUp
} as const);
export const setFetching = (fetching: boolean) => ({
    type: 'SET-FETCHING',
    fetching
} as const);
export const setSorting = (sorting: string) => ({
    type: 'SET-SORTING',
    sorting
} as const);
export const setCategory = (category: string) => ({
    type: 'SET-CATEGORY',
    category
} as const);
export const setShown = (isButtonShown: boolean, isResultShown: boolean) => ({
    type: 'SET-SHOWN',
    isButtonShown,
    isResultShown
} as const);
export const setExtraBooks = (extraBooks: Array<BookType>, currentPage: number) => ({
    type: 'SET-EXTRA-BOOKS',
    extraBooks,
    currentPage
} as const);

const checkBooksCategories = (books: Array<any>, category: string) => {
    if (books) {
        return books.filter((book: any) => {
                if (category === 'all') {
                    return true;
                }
                if (book.volumeInfo.categories) {
                    // return book.volumeInfo.categories.includes(category);
                    return book.volumeInfo.categories[0].toLowerCase() === category;
                }
                return false;
            }
        );
    } else {
        return [];
    }
}

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

        if (books.length < 30) {
            const response = await searchAPI.getBooks(bookTitle, currentPage += 30, sorting);

            if (response.data.items) {
                response.data.items.length < 30 ? noData = true : noData = false;

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

const initialState: BooksStateType = {
    searchStr: '',
    books: [],
    extraBooks: [],
    isFetching: false,
    isButtonShown: false,
    isResultShown: false,
    totalCount: null,
    currentPage: 0,
    sorting: 'relevance',
    category: 'all'
};

export const booksReducer = (state = initialState, action: BooksActionsType):
    BooksStateType => {
    switch (action.type) {
        case "SET-BOOKS":
            return {
                ...state,
                searchStr: action.searchStr,
                books: action.cleanUp
                    ? action.books
                    : [...state.books, ...action.books],
                totalCount: action.totalCount,
                currentPage: action.currentPage
            }
        case "SET-FETCHING":
            return {
                ...state,
                isFetching: action.fetching
            };
        case "SET-SORTING":
            return {
                ...state,
                sorting: action.sorting
            };
        case "SET-CATEGORY":
            return {
                ...state,
                category: action.category
            };
        case "SET-SHOWN":
            return {
                ...state,
                isButtonShown: action.isButtonShown,
                isResultShown: action.isResultShown
            };
        case "SET-EXTRA-BOOKS":
            return {
                ...state,
                extraBooks: action.extraBooks,
                currentPage: action.currentPage
            };
        default:
            return state;
    }
}