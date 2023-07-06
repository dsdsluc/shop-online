import { get } from "../utils/request"

export const CategoryList = ()=>{
    const response = get("category");
    return response;
}