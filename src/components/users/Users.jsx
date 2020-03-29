import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import User from './UserCard';

const Users = () => {
    let search = useSelector(state => state.search);
    let users = useSelector(state => state.users)
   
    const [activeCard, setActiveCard] = useState(false);
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));

    return(
        <section className="users-section borderTop">
            <h1 className="title">Users:</h1>
          {filteredUsers.map(user => (
              <User key={user._id} userData={user} active={activeCard === user._id} setActiveCard={setActiveCard} />
          ))}  
        </section>
    )
}
export default Users;