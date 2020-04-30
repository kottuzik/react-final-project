import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

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
            
                {user ?
                <div>
                    <div className="flexWrap">
                    <h1 className="title">{user.name} ToDo List</h1>
                   {/*  <BackLink
                        to = '/'
                        label = '&times;'
                    /> */}
                    </div>
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