export const usersReducer = (state = [], action) => {
    switch (action.type){
        case "GETUSERS":
            state = action.payload;
            return state;
        default:
            return state;
    }
}