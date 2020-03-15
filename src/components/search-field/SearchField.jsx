import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchField = () => {
    const dispatch = useDispatch();

    return(
        <div className="search-field">
            <input required type="text" onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value.toLowerCase() })} />
            <label>Search</label>
            
        </div>
    )
}


export default SearchField;