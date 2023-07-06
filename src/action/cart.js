export const addToCart = (id, infor)=>{
    return{
        type: "ADD_TO_CART",
        id: id,
        infor: infor,
    }
}
export const updateCart = (id, step)=>{
    return{
        type: "UPDATE_CART",
        id: id,
        step: step,
    }
}
export const delItem = (id)=>{
    return{
        type: "DELETE_ITEM",
        id: id,
    }
}
export const delAll = (id)=>{
    return{
        type: "DELETE_ALL",
    }
}

