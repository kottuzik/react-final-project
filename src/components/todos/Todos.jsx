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
    console.log("TODOS: " + todos);

    return(
        <div className="todos">
            {showAdd ? <AddTodo userId={id} setShowAdd={setShowAdd} /> : 
            <div>
                <button className="btn blue" onClick={() => setShowAdd(true)}>Add</button>

                    {/* <h1>{user.name} todos:</h1> */}
                    <h1>Name:</h1>
                {filterTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
            </div>
            }
        </div>
    )
}

export default Todos;