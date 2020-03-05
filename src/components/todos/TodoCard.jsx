import React from 'react';

const TodoCard = ({ todo }) => (
    <div className="todo-card">
        <div className="text">Title: {todo.title}</div>
        <div className="text">Completed: {todo.completed.toString()}</div>
        {todo.completed ? '' : <button>Mark Completed</button>}
    </div>
)
export default TodoCard;