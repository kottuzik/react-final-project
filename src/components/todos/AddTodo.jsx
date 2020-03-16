import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../../utils'

const AddTodo = ({ userId, setShowAdd }) => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const addTo = () => {
        postTodo({title: title, userId: userId})
        .then(todo => dispatch({ type: "ADDTODO", payload: todo }))
        setShowAdd(false);
    }

    return(
        <div className="add-todo flex">
            <label>
                Title: 
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>
               <div className="navs">
                  <button className="btn blue" onClick={addTo}>Add</button>
                  <button className="btn red" onClick={() => setShowAdd(false)}>Cancel</button>
               </div>
        
        </div>
    )
}

export default AddTodo;