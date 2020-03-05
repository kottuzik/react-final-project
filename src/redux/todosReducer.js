export const todosReducer = (state = [], action) => {
    switch (action.type){
        case "GETTODOS":
            state = action.payload;
            return state;
        default:
            return state;
    }
}