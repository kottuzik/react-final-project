export const todosReducer = (state = [], action) => {
    switch (action.type){
        case "GETTODOS":
            state = action.payload;
            return state;
        case "MARKCOMP":
            let arr = [...state];
            let i = arr.findIndex(x => x.id === action.payload);
            arr[i].completed = true;
            return [...arr];
        default:
            return state;
    }
}