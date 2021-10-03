import {
    setBooks, setCategory, setExtraBooks,
    setFetching, setShown,
    setSorting, setSpecificBook
} from "../bll/action-creators/actionCreators";


export type Nullable<T> = T | null;

export type BookType = {
    id: string
    image: string
    title: string
    categories: string[]
    authors: string[]
}

export type CommonSearchType = {
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

export type SpecificBookType = {
    id: string,
    image: string,
    title: string,
    categories: Array<string>
    authors: Array<string>
    description: string
}

export type BooksStateType = {
    commonSearch: CommonSearchType
    specificBook: SpecificBookType
}

export type BooksDispatchType = (dispatch: (action: BooksActionsType) => void) => void

export type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setSorting>
    | ReturnType<typeof setCategory>
    | ReturnType<typeof setShown>
    | ReturnType<typeof setExtraBooks>
    | ReturnType<typeof setSpecificBook>;

export type ShowBooksType = (
    bookTitle: string,
    page: number,
    cleanUp: boolean,
    sorting: string,
    category: string,
    extraBooksFromState: Array<BookType>
) => (dispatch: (action: BooksActionsType) => void) => void

export type ShowSpecificBookType = (
    bookId: string
) => (dispatch: (action: BooksActionsType) => void) => void
