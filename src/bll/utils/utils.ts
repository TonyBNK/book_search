import {
    BookFromAPIType,
    BookType,
    SpecificBookFromAPIType,
    SpecificBookType
} from "../../types/types";
import emptyBook from "../../images/emptyBook.jpg";

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
            ? bookFromAPI.volumeInfo.imageLinks.thumbnail
            : emptyBook,
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
            ? bookFromAPI.volumeInfo.imageLinks.small
            : emptyBook,
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
