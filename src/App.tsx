import React from 'react';
import c from './App.module.scss';
import {SearchComponent} from "./components/search/SearchComponent";
import {SearchResult} from "./components/search-result/SearchResult";
import {MoreResults} from "./components/more-results/MoreResults";
import {Redirect, Route} from "react-router-dom";
import {SpecificBook} from "./components/specific-book/SpecificBook";

function App() {
    return (
        <div className={c.App}>
            <SearchComponent/>
            <Redirect to={'/common-search'}/>
            <Route path={'/common-search'}>
                <div className={c.resultsContainer}>
                    <SearchResult/>
                    <MoreResults/>
                </div>
            </Route>
            <Route path={'/specific-book'}>
                <div className={c.specificBookContainer}>
                    <SpecificBook/>
                </div>
            </Route>
        </div>
    );
}

export default App;
