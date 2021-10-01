import {searchAPI} from "../api/api";


export type Nullable<T> = T | null;
export type BookType = {
    id: string
    image: string
    title: string
    categories: string[]
    authors: string[]
}

type BooksStateType = {
    searchStr: string
    books: Array<BookType>
    isFetching: boolean
    totalCount: Nullable<number>
    currentPage: number
}
export type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>;
export type ShowMoreBooksType = (bookTitle: string, page: number, cleanUp: boolean) =>
    (dispatch: (action: BooksActionsType) => void) => void


const setBooks = (
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

export const showBooks: ShowMoreBooksType = (
    bookTitle,
    page,
    cleanUp
) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        searchAPI
            .getBooks(bookTitle, page)
            .then(response => {
                console.log(response);
                dispatch(setFetching(false));

                const totalCount = response.data.totalItems;
                const books = response.data.items.map((book: any) => {
                    return {
                        id: book.id,
                        image: book.volumeInfo.imageLinks
                            ? book.volumeInfo.imageLinks.thumbnail
                            : '',
                        title: book.volumeInfo.title,
                        categories: book.volumeInfo.categories
                            ? book.volumeInfo.categories
                            : [''],
                        authors: book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : ['']
                    }
                });
                dispatch(setBooks(bookTitle, books, totalCount, page, cleanUp));
            })
            .catch(err => console.log('error ', err));
    }
}

const initialState: BooksStateType = {
    searchStr: '',
    books: [],
    isFetching: false,
    totalCount: null,
    currentPage: 0
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
        default:
            return state;
    }
}