import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TodoCard from './TodoCard';

const Todos = () => {
    const { id } = useParams()
    const todos = useSelector(state => state.todos)

    let filterTodos = todos.filter(x => x.userId === parseInt(id));

    return(
        <div className="todos">
            {filterTodos.map(todo => <TodoCard todo={todo} />)}
        </div>
    )
}

export default Todos;