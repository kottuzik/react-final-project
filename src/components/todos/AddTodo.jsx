import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../../utils'

const AddTodo = ({ userId, setShowAdd }) => {
    const [title, setTitle] = useState('');
    const [addTodoSucces, setAddTodoSucces] = useState('hide');
    const dispatch = useDispatch();

    const addTo = () => {
        postTodo({title: title, userId: userId}, dispatch)
        .then(message => {
            setAddTodoSucces(message)
            setTimeout(() =>{
                setShowAdd(false);
            }, 2500)
        })
    }

    return(
        <React.Fragment>
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
            <p className={addTodoSucces}>Your Task Added</p>
        </React.Fragment>
    )
}

export default AddTodo;