import axios from 'axios';

const apiAddress = 'https://rest-api-fp.herokuapp.com';

// GET DATA
export const getUsers = async () => {
    let usersResp = await axios.get(`${apiAddress}/users`);
    return usersResp.data;
}

export const getTodos = async () => {
    let todosResp = await axios.get(`${apiAddress}/todos`);
    return todosResp.data;
}

export const getPosts = async () => {
    let posts = await axios.get(`${apiAddress}/posts`);
    return posts.data;
}

// Todo functions ->

export const postTodo = async (obj, dispatch) => {
    try{
        const todo = await axios.post(`${apiAddress}/todos`, obj);
        await dispatch({ type: "ADDTODO", payload: todo.data });
        return 'message success'
    } catch (err) {
        return 'message wrong'
    }
}
export const updateCompleted = (id) => {
    axios.patch(`${apiAddress}/todos/${id}`, { completed: true })
    .catch(err => console.log(err));
}
export const updateIncompleted = (id) => {
    axios.patch(`${apiAddress}/todos/${id}`, {completed: false})
}
export const deleteTodo = (id) =>{
    axios.delete(`${apiAddress}/todos/${id}`);
}

// Post functions ->
export const postPost = async (obj, dispatch) => {
    let newPost = await axios.post(`${apiAddress}/posts`, obj);
    if(newPost){
        dispatch({ type: "ADDPOST", payload: newPost.data });  
    }
}

export const deletePost = (id) => {
    axios.delete(`${apiAddress}/posts/${id}`);
}

// User functions ->
export const postUser = async (obj, dispatch) => {
    let newUser = await axios.post(`${apiAddress}/users`, obj)
    if(newUser){
        dispatch({type: "ADDUSER", payload: newUser.data});
    }

    
}
export const deleteUser = (id) => {
    axios.delete(`${apiAddress}/users/${id}`);
    // delete all the user data todos and posts.
    axios.delete(`${apiAddress}/todos/user/${id}`);
    axios.delete(`${apiAddress}/posts/user/${id}`);
}

export const userUpdate = async (id, obj) => {
    let updatedUser = await axios.patch(`${apiAddress}/users/${id}`, obj)
}