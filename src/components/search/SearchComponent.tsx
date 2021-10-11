import React, {
    ChangeEvent,
    Dispatch,
    KeyboardEvent,
    useCallback,
    useState
} from "react";
import c from './SearchComponent.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {CategoriesFilter} from "./categories-filter/CategoriesFilter";
import {SortingFilter} from "./sorting-filter/SortingFilter";
import {IconButton, TextField} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import titleImg
    from '../../images/book-dark-enlightenment-1029141-1024x683.jpg';
import {AppThunkType, CommonSearchType, RootStateType} from "../../types/types";
import {showBooks} from "../../bll/thunks/thunks";
import {useHistory} from "react-router-dom";


export const SearchComponent = React.memo(() => {
    const [bookTitle, setBookTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const {
        sorting,
        category,
        extraBooks
    } = useSelector<RootStateType, CommonSearchType>(
        state => state.books.commonSearch
    );
    const dispatch = useDispatch<Dispatch<AppThunkType>>();
    const titleImage = {
        backgroundImage: `url(${titleImg})`
    }
    const history = useHistory();

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.currentTarget.value)
    }, []);
    const findBooks = useCallback(() => {
        if (bookTitle.trim()) {
            dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category, extraBooks));
            setBookTitle('');
            history.push('/common-search');
        } else {
            setError("Title is required!");
        }
    }, [dispatch, history, bookTitle, category, extraBooks, sorting]);
    const onEnterPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (bookTitle.trim()) {
                dispatch(showBooks(bookTitle.trim(), 0, true, sorting, category, extraBooks));
                setBookTitle('');
                history.push('/common-search');
            } else {
                setError("Title is required!");
            }
        } else {
            if (error !== null) {
                setError(null);
            }
        }
    }, [dispatch, history, bookTitle, category, extraBooks, sorting, error]);

    return (
        <div className={c.searchComponent} style={titleImage}>
            <h1>Search for books</h1>
            <div className={c.searchContainer}>
                <TextField
                    onChange={onChangeHandler}
                    value={bookTitle}
                    onKeyPress={onEnterPressHandler}
                    error={!!error}
                    label={!!error ? error : "Type book's title..."}
                    variant={'standard'}
                    color={'success'}
                />
                <IconButton onClick={findBooks}>
                    <Search
                        fontSize={'large'}
                        className={c.searchButton}
                    />
                </IconButton>
            </div>
            <div className={c.filterContainer}>
                <CategoriesFilter/>
                <SortingFilter/>
            </div>
        </div>
    )
});