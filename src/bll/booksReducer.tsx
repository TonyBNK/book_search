import {searchAPI} from "../api/api";

export type BookType = {
    image: string
    title: string
    categories: string[]
    authors: string[]
}

type BooksStateType = {
    books: Array<BookType>
    isFetching: boolean
};
export type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>;
export type ShowMoreBooksType = (bookTitle: string, currentPage?: number) =>
    (dispatch: (action: BooksActionsType) => void) => void


const setBooks = (books: Array<BookType>) => ({
    type: 'SET-BOOKS',
    books
} as const);
export const setFetching = (fetching: boolean) => ({
    type: 'SET-FETCHING',
    fetching
} as const);

export const showMoreBooks: ShowMoreBooksType = (bookTitle, currentPage = 0) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        searchAPI
            .getBooks(bookTitle)
            .then(response => {
                dispatch(setFetching(false));
                const books = response.data.items.map((book: any) => {
                    return {
                        image: book.volumeInfo.imageLinks.thumbnail,
                        title: book.volumeInfo.title,
                        categories: book.volumeInfo.categories,
                        authors: book.volumeInfo.authors
                    }
                });
                dispatch(setBooks(books));
            })
            .catch(err => console.log('error ', err));
    }
}

const initialState: BooksStateType = {
    books: [],
    isFetching: false
};

export const booksReducer = (state = initialState, action: BooksActionsType):
    BooksStateType => {
    switch (action.type) {
        case "SET-BOOKS":
            return {
                ...state,
                books: action.books
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