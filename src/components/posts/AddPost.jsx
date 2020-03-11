import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPost } from '../../utils'

const AddPost = ({ userId, setShowAdd }) => {
    const [state, setState] = useState({ userId: userId, title: '', body: '' });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const addTo = () => {
        postPost(state)
        .then(post => dispatch({ type: "ADDPOST", payload: post }));
        setShowAdd(false);
    }

    return(
        <div className="add-post">
            <label>
                Title: 
                <input type="text" name="title" onChange={handleChange} />
            </label>
            <label>
                Body: 
                <input type="text" name="body" onChange={handleChange} />
            </label>
                <button className="btn blue" onClick={addTo}>Add</button>
                <button className="btn red" onClick={() => setShowAdd(false)}>Cancel</button>
            
        </div>
    )
}

export default AddPost;