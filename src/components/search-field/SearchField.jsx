import React from 'react';
import { useDispatch } from 'react-redux';

const SearchField = () => {
    const dispatch = useDispatch();

    return(
        <div className="search-field">
            <label for="search">Search:</label>
            <input type="text" className="input-text" id="search" onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value.toLowerCase() })} />
            <button className="btn blue">ADD NEW</button>
        </div>
    )
}


export default SearchField;