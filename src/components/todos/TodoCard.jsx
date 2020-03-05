import React from 'react';
import { useDispatch } from 'react-redux';

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();

    const markCompleted = () => {
        dispatch({type: "MARKCOMP", payload: todo.id})
    }

    return(
        <div className="todo-card">
            <div className="text">Title: {todo.title}</div>
            <div className="text">Completed: {todo.completed.toString()}</div>
            {todo.completed ? '' : <button onClick={markCompleted}>Mark Completed</button>}
        </div>
    )
}
export default TodoCard;