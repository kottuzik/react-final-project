import React, { useState } from 'react';

const SearchField = () => {
    const [search, setSearch] = useState("")

    return(
        <div className="search-field">
            <input type="text" id="search" />
            <label htmlFor="search"></label>
        </div>
    )
}


export default SearchField;