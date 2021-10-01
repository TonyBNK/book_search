import React, {ChangeEvent} from "react";
import c from './CategoriesFilter.module.scss';
import {useDispatch} from "react-redux";
import {setCategory} from "../../../bll/booksReducer";


export const CategoriesFilter = () => {
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCategory(e.currentTarget.value));
    }

    return (
        <div className={c.categoriesFilter}>
            <select onChange={onChangeHandler}>
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="Computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
        </div>
    )
}