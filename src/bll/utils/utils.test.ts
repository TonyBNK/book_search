import {BookFromAPIType} from "../../types/types";
import {templateBooks} from "../templates/templates";
import {checkBooksCategories} from "./utils";

let randomBooks: Array<BookFromAPIType>;

beforeEach(() => {
    randomBooks = [...templateBooks];
});

test('func should return books with computers category or empty array', () => {
    let filteredBooks = checkBooksCategories(randomBooks, 'computers');

    expect(randomBooks.length).toBe(5);
    expect(filteredBooks.length).toBe(5);

    filteredBooks = checkBooksCategories(randomBooks, 'biography');
    expect(filteredBooks.length).toBe(0);

    filteredBooks = checkBooksCategories(randomBooks, 'all');
    expect(filteredBooks.length).toBe(5);
});