import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { todosReducer } from './todosReducer';
import { postsReducer } from './postsReducer';
import { searchReducer } from './searchReducer';

export const main = combineReducers({
    users: usersReducer,
    todos: todosReducer,
    posts: postsReducer,
    search: searchReducer
})