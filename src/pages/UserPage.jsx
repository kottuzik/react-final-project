import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Importing Components
import Todos from '../components/todos/Todos';
import Posts from '../components/posts/Posts';

const UserPage = () => {
    const { id } = useParams();

    const users = useSelector(state => state.users); 
    const user = users.find(user => user.id === parseInt(id));

    return(
        <div className="user-page">
            {user ?
            <div>
                <h1 className="title">{user.name} ToDo List</h1>
                <Todos id={parseInt(id)} />
                <Posts id={parseInt(id)} />
            </div>
            :
            <div className="loading">
                <p>Loading...</p>
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            }
        </div>
    )
}
export default UserPage;