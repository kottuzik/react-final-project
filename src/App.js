import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, getTodos } from './utils'

// Importing components
import SearchField from './components/search-field/SearchField';
import Users from './components/users/Users';
import Todos from './components/todos/Todos';

const App = () => {
  const dispatch = useDispatch();

  const middlewhere = async () => {
    let users = await getUsers();
    let todos = await getTodos();
    dispatch({ type: "GETUSERS", payload: users })
    dispatch({ type: "GETTODOS", payload: todos })
  }

  useEffect(() => {
    middlewhere()
  }, [])

  return (
    <div>
      <SearchField />
      <Users />
      <Route path="/:id" component={Todos} />
    </div>
  )
}

export default App;
