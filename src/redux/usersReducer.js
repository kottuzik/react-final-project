export const usersReducer = (state = [], action) => {
    switch (action.type){
        case "GETFROMSERVER":
            state = action.payload;
            return state;
        default:
            return state;
    }
}