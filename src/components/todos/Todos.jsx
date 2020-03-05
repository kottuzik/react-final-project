import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoCard from './TodoCard';
import AddTodo from './AddTodo';

const Todos = ({ id }) => {
    const [showAdd, setShowAdd] = useState(false);
    const todos = useSelector(state => state.todos)

    let filterTodos = todos.filter(x => x.userId === id);

    return(
        <div className="todos">
            {showAdd ? <AddTodo userId={id} setShowAdd={setShowAdd} /> : 
            <div>
                <button onClick={() => setShowAdd(true)}>Add</button>
                {filterTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
            </div>
            }
        </div>
    )
}

export default Todos;