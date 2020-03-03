import { getUsers } from '../utils';

export const usersReducer = (state = [], action) => {
    switch (action.type){
        case "CHG":
            state = action.payload;
            return state;
        default:
            return state;
    }
}