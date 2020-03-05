export const postsReducer = (state = [], action) => {
    switch (action.type){
        case "GETPOSTS":
            state = action.payload;
            return state;
        case "ADDPOST":
            let post = {
                userId: action.payload.userId,
                id: state.length,
                title: action.payload.title,
                body: action.payload.body
            }
            return [...state, post]
        default:
            return state;
    }
}