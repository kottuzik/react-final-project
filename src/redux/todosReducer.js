export const todosReducer = (state = [], action) => {
    switch (action.type){
        case "GETTODOS":
            state = action.payload;
            return state;
        case "MARKCOMP":
            let arr = [...state];
            let i = arr.findIndex(x => x._id === action.payload);
            arr[i].completed = true;
            return [...arr];
        case "ADDTODO":
            let todo = {
                userId: action.payload.userId,
                id: state.length,
                title: action.payload.title,
                completed: false
            }
            return [...state, todo];
            
            case "DELETETODO":
                let afterDell = state.filter(x => x._id !== action.payload);
                state = [...afterDell];
                return state;
        default:
            return state;
    }
}