import {BooksActionsType, BooksStateType,} from "../../types/types";

const initialState: BooksStateType = {
    commonSearch: {
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
    },
    specificBook: {
        id: '',
        image: '',
        title: '',
        categories: [],
        authors: [],
        description: ''
    }
};

export const booksReducer = (state = initialState, action: BooksActionsType):
    BooksStateType => {
    switch (action.type) {
        case "SET-BOOKS":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    searchStr: action.searchStr,
                    books: action.cleanUp
                        ? action.books
                        : [...state.commonSearch.books, ...action.books],
                    totalCount: action.totalCount,
                    currentPage: action.currentPage
                },
            }
        case "SET-FETCHING":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    isFetching: action.fetching
                }
            };
        case "SET-SORTING":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    sorting: action.sorting
                }
            };
        case "SET-CATEGORY":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    category: action.category
                }
            };
        case "SET-SHOWN":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    isButtonShown: action.isButtonShown,
                    isResultShown: action.isResultShown
                }
            };
        case "SET-EXTRA-BOOKS":
            return {
                ...state,
                commonSearch: {
                    ...state.commonSearch,
                    extraBooks: action.extraBooks,
                    currentPage: action.currentPage
                }
            };
        case "SET-SPECIFIC-BOOK":
            return {
                ...state,
                specificBook:{
                    ...state.specificBook,
                    id: action.id,
                    image: action.image,
                    title: action.title,
                    categories: action.categories,
                    authors: action.authors,
                    description: action.description
                }
            }
        default:
            return state;
    }
}
