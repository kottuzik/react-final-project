import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, getTodos, getPosts } from './utils'

// Importing components
import UserPage from './pages/UserPage';
import Main from './pages/Main';

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
      <div className="desktop">
        <Route path="/" component={Main} />
        <Route path="/:id" component={UserPage} />
      </div>
      <div className="mobile">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:id" component={UserPage} />
        </Switch>
      </div>
    </main>
  )
}

export default App;
