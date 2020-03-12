import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCompleted, deleteTodo } from '../../utils';

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();

    const markCompleted = () => {
        updateCompleted(todo._id)
        dispatch({type: "MARKCOMP", payload: todo._id})
    }
    const handleDelete = () =>{
        deleteTodo(todo._id)
        dispatch({type: "DELETETODO", payload: todo._id})
    }

    return(
        <div className="todo-card card" key={todo._id}>
            <p className="text"><span className="bold">Title:</span> {todo.title}</p>
            <p className="text"><span className="bold">Status Completed:</span> {todo.completed.toString()}</p>
            <div className="navs">
                {todo.completed ? '' : <button className="btn blue" onClick={markCompleted}>Mark Completed</button>}
                <button className="btn red" onClick={handleDelete}>Delete Task</button>
            </div>
        </div>
    )
}
export default TodoCard;