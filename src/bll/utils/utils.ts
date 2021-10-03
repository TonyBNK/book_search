export const checkBooksCategories = (books: Array<any>, category: string) => {
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
