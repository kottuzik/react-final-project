import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoCard from './TodoCard';
import AddTodo from './AddTodo';

const Todos = ({ id }) => {
    const [showAdd, setShowAdd] = useState(false);
    const todos = useSelector(state => state.todos)
    
    let filterTodos = todos.filter(x => x.userId === id);
    const users = useSelector(state => state.users);  
    const user = users.find(user => user.id === parseInt(id));
    return(
        <div className="todos borderTop">
            {showAdd ? <AddTodo userId={id} setShowAdd={setShowAdd} /> : 
            <div>
                <button className="btn blue" onClick={() => setShowAdd(true)}>Add New Task</button>
                {filterTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
            </div>
            }
        </div>
    )
}

export default Todos;