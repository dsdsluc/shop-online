export const addToCart = (state = [], action)=>{
    let newState = [
        ...state
    ]
    switch (action.type) {
        case "ADD_TO_CART":
            newState = [
                ...newState,
                {
                    id: action.id,
                    quanity : 1,
                    infor: action.infor
                }
            ]
            return newState;
        case "UPDATE_CART":
            const itemUpdate = newState.find(item=>item.id === action.id);
            itemUpdate.quanity += action.step
            return newState;
        case "DELETE_ITEM":
            newState = newState.filter(item=>item.id !==  action.id);
            return newState;
        case "DELETE_ALL":
            
            return [];
    
        default:
            return state;
    }
    
}
