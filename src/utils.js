import axios from 'axios';

export const getUsers = async () => {
    let usersResp = await axios.get('https://jsonplaceholder.typicode.com/users');
    let todosResp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const users = usersResp.data.map(user => {
        let filteredTodos = todosResp.data.filter(x => x.userId === user.id && x.completed === false);
        let isCompleted = filteredTodos.length === 0 ? true : false;
        return(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            isCompleted: isCompleted
        })
    })
    return users;
}

export const getTodos = async () => {
    let todosResp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return todosResp.data;
}