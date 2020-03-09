import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCompleted, deleteTodo } from '../../utils';

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const{_id, title} = todo;
    const markCompleted = () => {
        updateCompleted(todo._id)
        dispatch({type: "MARKCOMP", payload: todo.id})
    }
    const handleDelete = (id) =>{
        deleteTodo(id)
        dispatch({type: "DELETETODO", payload: id})
    }

    return(
        <div className="todo-card card" key={_id}>
            <p className="text"><span className="bold">Title:</span> {todo.title}</p>
            <p className="text"><span className="bold">Status Completed:</span> {todo.completed.toString()}</p>
            <div className="navs">
                {todo.completed ? '' : <button className="btn blue" onClick={markCompleted}>Mark Completed</button>}
                <button className="btn red" onClick={() => handleDelete(_id)}>Delete Task</button>
            </div>
        </div>
    )
}
export default TodoCard;