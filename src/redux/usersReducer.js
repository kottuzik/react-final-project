export const usersReducer = (state = [], action) => {
    switch (action.type){
        case "GETUSERS":
            state = action.payload;
            return state;

        case "ADDUSER":
            let arr = [...state, action.payload];
            state = [...arr];
            return state;
        
        case "DELETEUSER":
            let afterDell = state.filter(x => x._id !== action.payload);
            state = [...afterDell];
            return state;
        case "RESETUSERDATA":
            let clearData = action.payload;
            return clearData;
        default:
            return state;
    }
}