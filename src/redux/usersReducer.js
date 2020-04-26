export const usersReducer = (state = [], action) => {
    switch (action.type){
        case "GETUSERS":
            state = action.payload;
            return state;

            
        case "ADDUSER":
            return [...state, action.payload];
        
        case "DELETEUSER":
            let afterDell = state.filter(x => x._id !== action.payload);
            state = [...afterDell];
            return state;

            case "UPDATEUSER":
                let updatedUsers = [...state];
                let i = updatedUsers.findIndex(x => x._id === action.payload._id);
                updatedUsers[i] = {...action.payload}
                return [...updatedUsers];
        default:
            return state;
    }
}