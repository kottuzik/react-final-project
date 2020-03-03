import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { searchReducer } from './searchReducer';

export const main = combineReducers({
    users: usersReducer,
    search: searchReducer
})