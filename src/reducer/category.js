export const category = (state = "", action)=>{
    console.log(state, action);
    switch (action.type) {
        case "OPTION":
            
            return action.value;
        default:
            return state;
    }
 
}