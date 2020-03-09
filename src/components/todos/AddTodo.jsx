import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../../utils'

const AddTodo = ({ userId, setShowAdd }) => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const addTo = () => {
        postTodo({title: title, userId: userId});
        dispatch({ type: "ADDTODO", payload: {title: title, userId: userId} });
        setShowAdd(false);
    }

    return(
        <div className="add-todo">
            <label>
                Title: 
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <button className="btn blue" onClick={addTo}>Add</button>
                <button className="btn red" onClick={() => setShowAdd(false)}>Cancel</button>
            </label>
        </div>
    )
}

export default AddTodo;