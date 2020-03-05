export const postsReducer = (state = [], action) => {
    switch (action.type){
        case "GETPOSTS":
            state = action.payload;
            return state;
        default:
            return state;
    }
}