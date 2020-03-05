import React from 'react';
import { useSelector } from 'react-redux';

import TodoCard from './TodoCard';

const Todos = ({ id }) => {
    const todos = useSelector(state => state.todos)

    let filterTodos = todos.filter(x => x.userId === id);

    return(
        <div className="todos">
            {filterTodos.map(todo => <TodoCard todo={todo} />)}
        </div>
    )
}

export default Todos;