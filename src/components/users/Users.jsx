import React from 'react';
import { useSelector } from 'react-redux';

import User from '../user/User';

const Users = () => {
    let search = useSelector(state => state.search);
    let users = useSelector(state => state.users)

    // let filteredUsers = users.filter(user => user.name === search);
    // We need to solve the problem with the filter.
    // I don't know why it doesn't work.

    return(
        <div>
            <h1>Users:</h1>
          {users.map(user => (
              <User key={user.id} name={user.name} />
          ))}  
        </div>
    )
}

export default Users;