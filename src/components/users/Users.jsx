import React from 'react';
import { useSelector } from 'react-redux';

import User from '../user-card/UserCard';

const Users = () => {
    let search = useSelector(state => state.search);
    let users = useSelector(state => state.users)

    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));

    return(
        <div>
            <h1>Users:</h1>
          {filteredUsers.map(user => (
              <User key={user.id} userData={user} />
          ))}  
        </div>
    )
}

export default Users;