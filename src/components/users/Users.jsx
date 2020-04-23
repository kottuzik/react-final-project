import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllData } from '../../utils';

import User from './UserCard';
import Loader from '../loader/loader';

const Users = () => {
    const [isLoading, setIsloading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      getAllData(dispatch)
      .then(data => setIsloading(data));
    }, [])

    let search = useSelector(state => state.search);
    let users = useSelector(state => state.users)

    const [activeCard, setActiveCard] = useState(false);
    
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));

    return(
        <>
        {isLoading ? <Loader /> : 
        <section className="users-section borderTop">
            <h1 className="title">Users:</h1>
          {filteredUsers.map(user => (
              <User key={user._id} userData={user} active={activeCard === user._id} setActiveCard={setActiveCard} />
          ))}  
        </section>
        }
        </>
    )
}
export default Users;