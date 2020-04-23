import axios from 'axios';

const apiAddress = 'https://rest-api-fp.herokuapp.com';

export const getAllData = async (dispatch) => {
    let users = await getUsers();
    dispatch({ type: "GETUSERS", payload: users })
    let todos = await getTodos();
    dispatch({ type: "GETTODOS", payload: todos })
    let posts = await getPosts();
    dispatch({ type: "GETPOSTS", payload: posts })
    return false;
}

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
        return {
             title: 'Your Task Added',
             cssClass: 'message success'
        }
        } catch (err) {
            return {
                title: 'There is an error, try again later',
                cssClass: 'message error'
            }
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
    try{
        let newPost = await axios.post(`${apiAddress}/posts`, obj);
        await dispatch({ type: "ADDPOST", payload: newPost.data });  
        return{
            title: 'Your post added',
            cssClass: 'message success'
        }
    }catch(err){
        return {
            title: 'There is an error, try again later',
            cssClass: 'message error'
        }
    }   
}

export const deletePost = (id) => {
    axios.delete(`${apiAddress}/posts/${id}`);
}

// User functions ->
export const postUser = async (obj, dispatch) => {
    try{
        let newUser = await axios.post(`${apiAddress}/users`, obj)
        await dispatch({type: "ADDUSER", payload: newUser.data});
        return{
            title: 'The user added succesfully',
            cssClass: 'message success'
        }
    }catch(err){
        return {
            title: 'There is an error, try again later',
            cssClass: 'message error'
        }
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