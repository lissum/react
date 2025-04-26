import React from "react";

const SearchBar = () => (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
        <input type="text" placeholder="Найдётся всё. Например, фаза луны сегодня" style={{width: '80%'}}/>
        <button>Найти</button>
    </div>
);

export default SearchBar;