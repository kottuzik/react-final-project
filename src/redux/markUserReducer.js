export const markUserReducer = (state =  false, action) =>{
  switch(action.type){
    case "MARKUSER":{
      return state = true;
    }
    default:
       return state;
  }
}