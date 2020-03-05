import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoCard from './TodoCard';
import AddTodo from './AddTodo';

const Todos = ({ id }) => {
    const [showAdd, setShowAdd] = useState(false);
    const todos = useSelector(state => state.todos)
    const users = useSelector(state => state.users);
    const user = users.find(user => user.id === id);
    
    let filterTodos = todos.filter(x => x.userId === id);
    
    // Check if the data existing
    if (user){
        return(
            <div className="todos">
                {showAdd ? <AddTodo userId={id} setShowAdd={setShowAdd} /> : 
                <div>
                    <button className="btn blue" onClick={() => setShowAdd(true)}>Add</button>
    
                        <h1>{user.name} Page</h1>
                    {filterTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
                </div>
                }
            </div>
        )
    } else {
        return <div className="loading">Loading...</div>
    }
}

export default Todos;