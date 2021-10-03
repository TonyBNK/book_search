import {BookType} from "../../types/types";
import {
    setBooks,
    setCategory, setExtraBooks,
    setFetching,
    setShown,
    setSorting, setSpecificBook
} from "./actionCreators";


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

test('SET-BOOKS action should be created', () => {
    const Action = setBooks(
        'clr via c#', randomBooks, randomBooks.length,
        0, true
    );

    expect(Action.type).toBe('SET-BOOKS');
    expect(Action.cleanUp).toBeTruthy();
    expect(Action.searchStr).toBe('clr via c#');
    expect(Action.books.length).toBe(3);
});

test('SET-FETCHING action should be created', () => {
    const Action = setFetching(true);
    const Action2 = setFetching(false);

    expect(Action.type).toBe('SET-FETCHING');
    expect(Action.type).toEqual(Action2.type);
    expect(Action.fetching).toBeTruthy();
    expect(Action2.fetching).not.toBeTruthy();
});

test('SET-SORTING action should be created', () => {
    const Action = setSorting('all');
    const Action2 = setSorting('biography');

    expect(Action.type).toBe('SET-SORTING');
    expect(Action.type).toEqual(Action2.type);
    expect(Action.sorting).toBe('all');
    expect(Action2.sorting).toBe('biography');
});

test('SET-CATEGORY action should be created', () => {
    const Action = setCategory('relevance');
    const Action2 = setCategory('newest');

    expect(Action.type).toBe('SET-CATEGORY');
    expect(Action.type).toEqual(Action2.type);
    expect(Action.category).toBe('relevance');
    expect(Action2.category).toBe('newest');
});

test('SET-SHOWN action should be created', () => {
    const Action = setShown(true, false);
    const Action2 = setShown(false, true);

    expect(Action.type).toBe('SET-SHOWN');
    expect(Action.type).toEqual(Action2.type);
    expect(Action.isButtonShown).toBe(true);
    expect(Action.isButtonShown).not.toEqual(Action2.isButtonShown);
    expect(Action2.isResultShown).toBe(true);
    expect(Action.isResultShown).not.toEqual(Action2.isResultShown);
});

test('SET-EXTRA-BOOKS action should be created', () => {
    const Action = setExtraBooks([], 15);

    expect(Action.type).toBe('SET-EXTRA-BOOKS');
    expect(Action.extraBooks.length).toBe(0);
    expect(Action.currentPage).toBe(15);
});

test('SET-SPECIFIC-BOOK action should be created', () => {
    const Action = setSpecificBook({
        id: '1',
        image: 'image1',
        title: 'title1',
        categories: ['category1'],
        authors: ['author1'],
        description: 'description1'
    });

    expect(Action.type).toBe('SET-SPECIFIC-BOOK');
    expect(Action.id).toBe('1');
    expect(Action.authors.length).toBe(1);
    expect(Action.description).toBe('description1');
});
