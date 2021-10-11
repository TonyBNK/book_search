import {ThunkAction} from "redux-thunk";
import {
    setBooks,
    setCategory,
    setExtraBooks,
    setFetching,
    setShown,
    setSorting,
    setSpecificBook
} from "../bll/action-creators/actionCreators";
import {rootReducer} from "../bll/store";


export type Nullable<T> = T | null;

export type RootStateType = ReturnType<typeof rootReducer>;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, BooksActionsType>;

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
    extraBooks: Array<BookFromAPIType>
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

export type BooksActionsType =
    ReturnType<typeof setBooks>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setSorting>
    | ReturnType<typeof setCategory>
    | ReturnType<typeof setShown>
    | ReturnType<typeof setExtraBooks>
    | ReturnType<typeof setSpecificBook>;

export type BookFromAPIType = {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: {
        title: string
        authors: string[],
        publisher: string,
        publishedDate: string,
        description: string
        industryIdentifiers: Array<{ type: string, identifier: string }>
        readingModes: {
            text: boolean
            image: boolean
        }
        printType: string
        categories: string[]
        maturityRating: string
        allowAnonLogging: boolean
        contentVersion: string
        panelizationSummary: {
            containsEpubBubbles: boolean
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        },
        language: string
        previewLink: string
        infoLink: string
        canonicalVolumeLink: string
    },
    saleInfo: {
        country: string
        saleability: string
        isEbook: boolean
        listPrice?: {
            amount: number
            currencyCode: string
        },
        retailPrice?: {
            amount: number
            currencyCode: string
        },
        buyLink?: string
        offers?: Array<{
            finskyOfferType: number
            listPrice: {
                amountInMicros: number
                currencyCode: string
            },
            retailPrice: {
                amountInMicros: number
                currencyCode: string
            }
        }>
    },
    accessInfo: {
        country: string
        viewability: string
        embeddable: boolean
        publicDomain: boolean
        textToSpeechPermission: string
        epub: {
            isAvailable: boolean
        },
        pdf: {
            isAvailable: boolean
            acsTokenLink?: string
        },
        webReaderLink: string
        accessViewStatus: string
        quoteSharingAllowed: boolean
    },
    searchInfo: {
        textSnippet: string
    }
}

export type SpecificBookFromAPIType = {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: {
        title: string
        authors: string[],
        publisher: string
        publishedDate: string
        description: string
        industryIdentifiers: Array<{
            type: string
            identifier: string
        }>,
        readingModes: {
            text: boolean
            image: boolean
        },
        pageCount: number
        printedPageCount: number
        printType: string
        categories: string[]
        maturityRating: string
        allowAnonLogging: boolean
        contentVersion: string
        panelizationSummary: {
            containsEpubBubbles: boolean
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
            small: string
            medium: string
            large: string
            extraLarge: string
        },
        language: string
        previewLink: string
        infoLink: string
        canonicalVolumeLink: string
    },
    saleInfo: {
        country: string
        saleability: string
        isEbook: boolean
        listPrice: {
            amount: number
            currencyCode: string
        },
        retailPrice: {
            amount: number
            currencyCode: string
        },
        buyLink: string
        offers: Array<{
            finskyOfferType: number
            listPrice: {
                amountInMicros: number
                currencyCode: string
            },
            retailPrice: {
                amountInMicros: number
                currencyCode: string
            }
        }>
    },
    accessInfo: {
        country: string
        viewability: string
        embeddable: boolean
        publicDomain: boolean
        textToSpeechPermission: string
        epub: {
            isAvailable: boolean
        },
        pdf: {
            isAvailable: boolean
            acsTokenLink: string
        },
        webReaderLink: string
        accessViewStatus: string
        quoteSharingAllowed: boolean
    }
}