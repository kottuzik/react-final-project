import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing components
import UserPage from './pages/UserPage';
import Main from './pages/Main';
import AddUser from './components/users/AddUser';

const App = () => (
    <main className="main">
      <div className="desktop">
        <Route path="/" component={Main} />
        <Switch>
          <Route exact path="/" component={AddUser}/>
          <Route path="/:id" component={UserPage} />
        </Switch>
        
      </div>
      <div className="mobile">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:id" component={UserPage} />
        </Switch>
      </div>
    </main>
)

export default App;
