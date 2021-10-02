import React from 'react';
import c from './App.module.scss';
import {SearchComponent} from "./components/search/SearchComponent";
import {SearchResult} from "./components/search-result/SearchResult";
import {MoreResults} from "./components/more-results/MoreResults";

function App() {
    return (
        <div className={c.App}>
            <SearchComponent/>
            <div className={c.resultsContainer}>
                <SearchResult/>
                <MoreResults/>
            </div>
        </div>
    );
}

export default App;
