import { get } from "../utils/request"

export const getProduct = ()=>{
        const response = get(`products`);
        return response;
}
export const searchProduct = (param)=>{
        const response = get(`products?q=${param}`);
        return response;
}
export const detailProduct = (param)=>{
        const response = get(`products/${param}`);
        return response;
}
export const filterProduct = (category)=>{
        const response = get(`products?category=${category}`);
        return response;
}

