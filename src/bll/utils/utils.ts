import {
    BookFromAPIType,
    BookType,
    SpecificBookFromAPIType,
    SpecificBookType
} from "../../types/types";
import empty_book from "../../images/empty_book.jpg";
import empty_specific_book from '../../images/empty_specific_book.jpg';

export const checkBooksCategories = (books: Array<BookFromAPIType>, category: string): Array<BookFromAPIType> => {
    if (books) {
        return books.filter((book: BookFromAPIType) => {
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

export const bookTypeFormatter = (bookFromAPI: BookFromAPIType): BookType => {
    return {
        id: bookFromAPI.id,
        image: bookFromAPI.volumeInfo.imageLinks
            ? bookFromAPI.volumeInfo.imageLinks.thumbnail ? bookFromAPI.volumeInfo.imageLinks.thumbnail : empty_book
            : empty_book,
        title: bookFromAPI.volumeInfo.title,
        authors: bookFromAPI.volumeInfo.authors
            ? bookFromAPI.volumeInfo.authors
            : [''],
        categories: bookFromAPI.volumeInfo.categories
            ? bookFromAPI.volumeInfo.categories
            : [''],
    }
}

export const specificBookTypeFormatter = (bookFromAPI: SpecificBookFromAPIType): SpecificBookType => {
    return {
        id: bookFromAPI.id,
        image: bookFromAPI.volumeInfo.imageLinks
            ? bookFromAPI.volumeInfo.imageLinks.small ? bookFromAPI.volumeInfo.imageLinks.small : empty_specific_book
            : empty_specific_book,
        title: bookFromAPI.volumeInfo.title,
        categories: bookFromAPI.volumeInfo.categories
            ? bookFromAPI.volumeInfo.categories
            : [''],
        authors: bookFromAPI.volumeInfo.authors
            ? bookFromAPI.volumeInfo.authors
            : [''],
        description: bookFromAPI.volumeInfo.description
            ? bookFromAPI.volumeInfo.description
            : ''
    }

}
