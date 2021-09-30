import {searchAPI} from "../api/api";

type BookType = {
    img: string
    title: string
    category: string
    authors: string
}

type BooksStateType = {
    books: Array<BookType>
    isFetching: boolean
};
type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>;
type ShowMoreBooksType = (bookTitle: string, currentPage: number) =>
    (dispatch: (action: BooksActionsType) => void) => void


const setBooks = (books: Array<BookType>) => ({
    type: 'SET-BOOKS',
    books
} as const);
export const setFetching = (fetching: boolean) => ({
    type: 'SET-FETCHING',
    fetching
} as const);

export const showMoreBooks: ShowMoreBooksType = (bookTitle, currentPage) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        searchAPI
            .getBooks(bookTitle, currentPage)
            .then(response => {
                dispatch(setFetching(false));
                const books = response.data.items.map((book: any) => {
                    return{
                        img: book.volumeInfo.imageLinks.thumbnail,
                        title: book.volumeInfo.title,
                        // category,
                        // authors
                    }
                });
                dispatch(setBooks(books));
            })
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