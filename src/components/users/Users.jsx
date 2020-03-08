import React from 'react';
import { useSelector } from 'react-redux';

import User from './UserCard';

const Users = () => {
    let search = useSelector(state => state.search);
    let users = useSelector(state => state.users)

    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));

    return(
        <section className="users-section borderTop">
            <h1>Users:</h1>
          {filteredUsers.map(user => (
              <User key={user.id} userData={user} />
          ))}  
        </section>
    )
}
export default Users;