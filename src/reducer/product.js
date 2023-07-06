export const searchProduct = (state = "", action)=>{
    console.log(state, action);
    switch (action.type) {
        case "SEARCH":
            
            return action.value;
    
        default:
            return state;
    }
 
}