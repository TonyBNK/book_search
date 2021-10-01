import React from "react";
import c from './CategoriesFilter.module.scss';


export const CategoriesFilter = () => {
    return(
        <div className={c.categoriesFilter}>
            <select name="" id="">
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
        </div>
    )
}