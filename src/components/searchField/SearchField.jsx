import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchField = () => {
    const dispatch = useDispatch();

    return(
        <div className="search-field">
            <h2>Project</h2>
            <input type="text" id="search" onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })} />
        </div>
    )
}


export default SearchField;