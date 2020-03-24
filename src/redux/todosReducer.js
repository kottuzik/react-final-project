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

        case "MARKINCOMPLETE":
            let arrIncomplete = [...state];
            let j = arrIncomplete.findIndex(x => x._id === action.payload);
            arrIncomplete[j].completed = false;
            return [...arrIncomplete];

        case "ADDTODO":
            let todo = action.payload;
            return [...state, todo];
            
        case "DELETETODO":
            let afterDell = state.filter(x => x._id !== action.payload);
            state = [...afterDell];
            return state;
        default:
            return state;
    }
}