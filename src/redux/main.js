import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'

export const main = combineReducers({
    users: usersReducer
})