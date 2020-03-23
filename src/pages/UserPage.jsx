import React from 'react';
import { useParams, Link, useRouteMatch, } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Importing Components
import Todos from '../components/todos/Todos';
import Posts from '../components/posts/Posts';
import Loader from '../components/loader';

const UserPage = () => {
    const { id } = useParams();

    const users = useSelector(state => state.users); 
    const user = users.find(user => user._id === id);

    function BackLink ({ label, to}){
        let match = useRouteMatch({
            path: to
        });
        return(
            <div className="back-link onlyMobile">
                 <Link to={to}><span>&#8592;</span>{label}</Link>
            </div>
        )
    }

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