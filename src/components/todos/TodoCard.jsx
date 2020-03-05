import React from 'react';
import { useDispatch } from 'react-redux';

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();

    const markCompleted = () => {
        dispatch({type: "MARKCOMP", payload: todo.id})
    }

    return(
        <div className="todo-card card">
            <p className="text"><span className="bold">Title:</span> {todo.title}</p>
            <p className="text"><span className="bold">Status Completed:</span> {todo.completed.toString()}</p>
            
            {todo.completed ? '' : <button className="btn blue" onClick={markCompleted}>Mark Completed</button>}
        </div>
    )
}
export default TodoCard;