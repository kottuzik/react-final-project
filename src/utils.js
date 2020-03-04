import axios from 'axios';

export const getUsers = async () => {
    let usersResp = await axios.get('https://jsonplaceholder.typicode.com/users');
    let todosResp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const users = usersResp.data.map(user => {
        let filteredTodos = todosResp.data.filter(x => x.userId === user.id);
        return(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            todos: filteredTodos
        })
    })
    return users;
}