import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, getTodos, getPosts } from './utils'

// Importing components
import SearchField from './components/search-field/SearchField';
import Users from './components/users/Users';
import UserPage from './pages/UserPage';

const App = () => {
  const dispatch = useDispatch();

  const middlewhere = async () => {
    let users = await getUsers();
    let todos = await getTodos();
    let posts = await getPosts();
    dispatch({ type: "GETUSERS", payload: users })
    dispatch({ type: "GETTODOS", payload: todos })
    dispatch({ type: "GETPOSTS", payload: posts })
  }

  useEffect(() => {
    middlewhere()
  }, [])

  return (
    <main className="main">
      <div className="left-side">
        <SearchField />
        <Users />
      </div>
      <Route path="/:id" component={UserPage} />
    </main>
  )
}

export default App;
