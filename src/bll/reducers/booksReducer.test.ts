import {BooksStateType, BookType} from "../../types/types";
import {
    setBooks, setCategory, setExtraBooks,
    setFetching, setShown,
    setSorting, setSpecificBook
} from "../action-creators/actionCreators";
import {booksReducer} from "./booksReducer";


const randomBooks: Array<BookType> = [
    {
        id: '1',
        image: 'image1',
        title: 'title1',
        categories: ['category1'],
        authors: ['author1']
    },
    {
        id: '2',
        image: 'image2',
        title: 'title2',
        categories: ['category2'],
        authors: ['author2']
    },
    {
        id: '3',
        image: 'image3',
        title: 'title3',
        categories: ['category3'],
        authors: ['author3']
    },
];

let state: BooksStateType;

beforeEach(() => {
    state = {
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
});

test('state should be set with books', () => {
    const Action = setBooks(
        'clr via c#', randomBooks, randomBooks.length,
        10, true
    );

    const newState = booksReducer(state, Action);

    expect(newState.commonSearch.searchStr).toBe('clr via c#');
    expect(newState.commonSearch.books.length).toBe(3);
    expect(newState.commonSearch.currentPage).toBe(10);
});

test('state should be set with fetching', () => {
    const Action = setFetching(true);
    const Action2 = setFetching(false);

    let newState = booksReducer(state, Action);

    expect(newState.commonSearch.isFetching).toBe(true);

    newState = booksReducer(state, Action2);

    expect(newState.commonSearch.isFetching).toBe(false);
});

test('state should be set with sorting', () => {
    const Action = setSorting('relevance');
    const Action2 = setSorting('newest');

    let newState = booksReducer(state, Action);

    expect(newState.commonSearch.sorting).toBe('relevance');

    newState = booksReducer(state, Action2);

    expect(newState.commonSearch.sorting).toBe('newest');
});

test('state should be set with category', () => {
    const Action = setCategory('medical');
    const Action2 = setCategory('history');

    let newState = booksReducer(state, Action);

    expect(newState.commonSearch.category).toBe('medical');

    newState = booksReducer(state, Action2);

    expect(newState.commonSearch.category).toBe('history');
});

test('state should be set with show result and button', () => {
    const Action = setShown(true, false);
    const Action2 = setShown(false, true);

    let newState = booksReducer(state, Action);

    expect(newState.commonSearch.isButtonShown).toBe(true);
    expect(newState.commonSearch.isResultShown).toBe(false);

    newState = booksReducer(state, Action2);

    expect(newState.commonSearch.isButtonShown).toBe(false);
    expect(newState.commonSearch.isResultShown).toBe(true);
});

test('state should be set with extra books', () => {
    const Action = setExtraBooks(
        [
            {
                id: '2',
                image: 'image2',
                title: 'title2',
                categories: ['category2'],
                authors: ['author2']
            },
            {
                id: '3',
                image: 'image3',
                title: 'title3',
                categories: ['category3'],
                authors: ['author3']
            }
        ],
        65
    );

    let newState = booksReducer(state, Action);

    const booksForUI = [...newState.commonSearch.books, ...newState.commonSearch.extraBooks];

    expect(newState.commonSearch.extraBooks.length).toBe(2);
    expect(booksForUI.length).toBe(2);
});

test('state should be set with specific book', () => {
    const Action = setSpecificBook({
        id: '4',
        image: 'image4',
        title: 'title4',
        categories: ['category4'],
        authors: ['author4'],
        description: 'description4'
    });

    let newState = booksReducer(state, Action);

    expect(newState.specificBook.id).toBe('4');
    expect(newState.specificBook.authors.length).toBe(1);
    expect(newState.specificBook.description).toBe('description4');
});
