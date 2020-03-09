import axios from 'axios';

// GET DATA
export const getUsers = async () => {
    let usersResp = await axios.get('http://rest-api-fp.herokuapp.com/users');
    return usersResp.data;
}

export const getTodos = async () => {
    let todosResp = await axios.get('http://rest-api-fp.herokuapp.com/todos');
    return todosResp.data;
}

export const getPosts = async () => {
    let posts = await axios.get('http://rest-api-fp.herokuapp.com/posts');
    return posts.data;
}

// Todo functions ->

export const postTodo = (obj) => {
    axios.post('http://rest-api-fp.herokuapp.com/todos', obj)
    .catch(err => console.log(err))
}
export const updateCompleted = (id) => {
    axios.patch(`http://rest-api-fp.herokuapp.com/todos/${id}`)
    .catch(err => console.log(err));
}

// Post functions ->
export const postPost = (obj) => {
    axios.post('http://rest-api-fp.herokuapp.com/posts', obj)
}


// User functions ->
export const postUser = (obj) => {
    axios.post('http://rest-api-fp.herokuapp.com/users', obj);
}
export const deleteUser = (id) => {
    axios.delete(`http://rest-api-fp.herokuapp.com/todos/${id}`);
}