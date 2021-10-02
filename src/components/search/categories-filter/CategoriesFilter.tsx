import React from "react";
import c from './CategoriesFilter.module.scss';
import {useDispatch} from "react-redux";
import {setCategory} from "../../../bll/booksReducer";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";


export const CategoriesFilter = () => {
    const dispatch = useDispatch();

    const onChangeHandler = (e: SelectChangeEvent) => {
        dispatch(setCategory(e.target.value));
    }

    return (
        <div className={c.categoriesFilter}>
            <FormControl sx={{
                m: 1,
                minWidth: 120,
                background: "white",
                borderRadius: 1
            }}>
                <InputLabel
                    id={'CategoriesSelect'}
                    color={'success'}
                >
                    Categories
                </InputLabel>
                <Select
                    className={c.select}
                    labelId={'CategoriesSelect'}
                    onChange={onChangeHandler}
                    label='Categories'
                    color={'success'}
                    variant={'standard'}
                    defaultValue={'all'}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="art">Art</MenuItem>
                    <MenuItem value="biography">Biography</MenuItem>
                    <MenuItem value="computers">Computers</MenuItem>
                    <MenuItem value="history">History</MenuItem>
                    <MenuItem value="medical">Medical</MenuItem>
                    <MenuItem value="poetry">Poetry</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}