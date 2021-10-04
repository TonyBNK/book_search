import React from "react";
import preloader from "../../images/loading-37.gif";
import c from './Preloader.module.scss';

export const Preloader = React.memo(() => {
    return (
        <div className={c.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
});