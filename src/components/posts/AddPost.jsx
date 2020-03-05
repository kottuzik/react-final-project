import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddPost = ({ userId, setShowAdd }) => {
    const [state, setState] = useState({ userId: userId, title: '', body: '' });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const addTo = () => {
        dispatch({ type: "ADDPOST", payload: state });
        setShowAdd(false);
    }

    return(
        <div className="add-post">
            <label>
                Title: 
                <input type="text" name="title" onChange={handleChange} />
                Body: 
                <input type="text" name="body" onChange={handleChange} />
                <button onClick={addTo}>Add</button>
                <button onClick={() => setShowAdd(false)}>Cancel</button>
            </label>
        </div>
    )
}

export default AddPost;