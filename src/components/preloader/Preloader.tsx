import React from "react";
import preloader from "../../images/loading-37.gif";
import c from './Preloader.module.scss';

export const Preloader = () => {
    return (
        <div className={c.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}