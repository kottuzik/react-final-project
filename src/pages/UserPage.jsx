import React from 'react';
import { useParams, } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Importing Components
import Todos from '../components/todos/Todos';
import Posts from '../components/posts/Posts';
import Loader from '../components/loader/loader';
import BackLink from '../components/backLink/backLink';

const UserPage = () => {
    const { id } = useParams();

    const users = useSelector(state => state.users); 
    const user = users.find(user => user._id === id);

    return(      
            <div className="user-page">
            <BackLink
                to = '/'
                label = 'Back to main page'
            />
                {user ?
                <div>
                    <h1 className="title">{user.name} ToDo List</h1>
                    <Todos id={id} />
                    <Posts id={id} />
                </div>
                :
                <Loader/>
                }
            </div>       
    )
}
export default UserPage;