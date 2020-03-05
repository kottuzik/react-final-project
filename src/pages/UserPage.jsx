import React from 'react';
import { useParams } from 'react-router-dom';

// Importing Components
import Todos from '../components/todos/Todos';
import Posts from '../components/posts/Posts';

const UserPage = () => {
    const { id } = useParams();

    return(
        <div className="user-page">
            <Todos id={parseInt(id)} />
            <Posts id={parseInt(id)} />
        </div>
    )
}
export default UserPage;