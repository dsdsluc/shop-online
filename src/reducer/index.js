import  { combineReducers } from "redux";
import  { addToCart }  from "./cart";
import { searchProduct } from "./product";
import { category } from "./category";
const allReducers = combineReducers({
    addToCart, searchProduct,category
    
});
export default allReducers;