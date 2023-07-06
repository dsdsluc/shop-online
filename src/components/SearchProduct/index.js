import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchToCart } from "../../action/product";

function SearchProduct (){
    const navigation = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const value = e.target.elements.searchProudct.value;
        if(value.length > 0 ){
            dispatch(searchToCart(value));
            navigation("/search");
        }
        else{
            navigation("/");
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name="searchProudct"/>
                <button> Search</button>
            </form>
        </>
    )
}
export default SearchProduct;