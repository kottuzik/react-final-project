import axios from 'axios';

export const getUsers = async () => {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    return resp.data;
}