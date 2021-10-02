import {searchAPI} from "../api/api";


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
    isShown: boolean
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
export const setSorting = (sorting: string) => ({
    type: 'SET-SORTING',
    sorting
} as const);
export const setCategory = (category: string) => ({
    type: 'SET-CATEGORY',
    category
} as const);
export const setShown = (isShown: boolean) => ({
    type: 'SET-SHOWN',
    isShown
} as const);
const setExtraBooks = (extraBooks: Array<BookType>, currentPage: number) => ({
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
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            const response = await searchAPI.getBooks(bookTitle, page, sorting);

            console.log(response);

            let categorisedBooks: Array<BookType>;
            let extraBooks: Array<BookType>;
            let step = 1;

            if (response.data.items) {
                categorisedBooks = [...extraBooksFromState, ...checkBooksCategories(response.data.items, category)];

                for (let i = 0; i < 3; i++) {
                    if (categorisedBooks.length < 30) {
                        const extraResponse = await searchAPI.getBooks(bookTitle, page + 30 * step, sorting);

                        categorisedBooks = [...categorisedBooks, ...checkBooksCategories(extraResponse.data.items, category)];
                        step++;
                    } else {
                        break;
                    }
                }

            } else {
                categorisedBooks = [];
            }

            extraBooks = categorisedBooks.splice(30);

            const totalCount = response.data.totalItems;

            const books = categorisedBooks.map((book: any) => {
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
            dispatch(setFetching(false));

            dispatch(setBooks(bookTitle, books, totalCount, page, cleanUp));

            dispatch(setExtraBooks(extraBooks, page + 30 * step));

            dispatch(setShown(true));

            if (categorisedBooks.length === 0) {
                dispatch(setShown(false));
            }
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
    isShown: false,
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
                isShown: action.isShown
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