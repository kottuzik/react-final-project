import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { todosReducer } from './todosReducer';
import { postsReducer } from './postsReducer';
import { searchReducer } from './searchReducer';
import { markUserReducer } from './markUserReducer';

export const main = combineReducers({
    users:    usersReducer,
    todos:    todosReducer,
    posts:    postsReducer,
    search:   searchReducer,
    markUser: markUserReducer,
})