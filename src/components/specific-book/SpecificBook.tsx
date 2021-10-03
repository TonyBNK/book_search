import React from "react";
import c from './SpecificBook.module.scss';
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {SpecificBookType} from "../../types/types";
import {Preloader} from "../preloader/Preloader";

export const SpecificBook = () => {
    const {
        id,
        image,
        title,
        categories,
        authors,
        description
    } = useSelector<RootStateType, SpecificBookType>(
        state => state.books.specificBook
    );
    const isFetching = useSelector<RootStateType, boolean>(
        state => state.books.commonSearch.isFetching
    );

    return (
        <>
            <div key={id} className={c.specificBook}>
                <div className={c.image}>
                    <img src={image} alt="book"/>
                </div>
                <div className={c.body}>
                    <h3>{title}</h3>
                    <span>{categories}</span>
                    <span>{authors}</span>
                    <p>{description}</p>
                </div>
            </div>
            {isFetching ? <Preloader/> : null}
        </>
    )
}