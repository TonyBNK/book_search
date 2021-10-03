import {BookType, SpecificBookType} from "../../types/types";


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

export const setSpecificBook = (bookData: SpecificBookType) => ({
    type: 'SET-SPECIFIC-BOOK',
    ...bookData
} as const);
