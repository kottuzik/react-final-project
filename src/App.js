import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing components
import UserPage from './pages/UserPage';
import Main from './pages/Main';

const App = () => (
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

export default App;
