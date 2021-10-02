import {
    setBooks,
    setCategory, setExtraBooks,
    setFetching,
    setShown,
    setSorting
} from "../bll/booksReducer";

export type Nullable<T> = T | null;
export type BookType = {
    id: string
    image: string
    title: string
    categories: string[]
    authors: string[]
}
export type BooksStateType = {
    searchStr: string
    books: Array<BookType>
    extraBooks: Array<BookType>
    isFetching: boolean
    isButtonShown: boolean
    isResultShown: boolean
    totalCount: Nullable<number>
    currentPage: number
    sorting: string
    category: string
}
export type BooksDispatchType = (dispatch: (action: BooksActionsType) => void) => void
export type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setSorting>
    | ReturnType<typeof setCategory>
    | ReturnType<typeof setShown>
    | ReturnType<typeof setExtraBooks>;
export type ShowBooksType = (
    bookTitle: string,
    page: number,
    cleanUp: boolean,
    sorting: string,
    category: string,
    extraBooksFromState: Array<BookType>
) => (dispatch: (action: BooksActionsType) => void) => void