import React from 'react';
import c from './App.module.css';
import {Search} from "./components/search/Search";
import {SearchResult} from "./components/search-result/SearchResult";
import {MoreResults} from "./components/more-results/MoreResults";

function App() {
    return (
        <div className={c.App}>
            <Search/>
            <SearchResult/>
            <MoreResults/>
        </div>
    );
}

export default App;
