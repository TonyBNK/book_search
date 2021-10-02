import React from "react";
import c from './SortingFilter.module.scss';
import {setSorting} from "../../../bll/booksReducer";
import {useDispatch} from "react-redux";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";


export const SortingFilter = () => {
    const dispatch = useDispatch();

    const onChangeHandler = (e: SelectChangeEvent) => {
        dispatch(setSorting(e.target.value));
    }

    return (
        <div className={c.sortingFilter}>
            <FormControl sx={{ m: 1, minWidth: 120}}>
                <InputLabel
                    id={'SortingSelect'}
                    color={'success'}
                >
                    Sorting by
                </InputLabel>
                <Select
                    className={c.select}
                    labelId={'SortingSelect'}
                    onChange={onChangeHandler}
                    label='SortingBy'
                    variant={'standard'}
                    color={'success'}
                    defaultValue={'relevance'}
                >
                    <MenuItem value="relevance">Relevance</MenuItem>
                    <MenuItem value="newest">Newest</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}