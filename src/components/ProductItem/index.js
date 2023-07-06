import { useDispatch, useSelector } from "react-redux" 
import { addToCart, updateCart } from "../../action/cart";
import { useNavigate } from "react-router-dom";
function ProductItem  (props){
    const {item}= props;
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const cart = useSelector(state =>state.addToCart);
    const percent = item.discountPercentage.toFixed(0);
    const priceNew = (item.price * (100 - percent ) /100).toFixed(0);
    const exitsItem = cart.some(i=>(
        i.id === item.id
    ));
    const handleAddToCart = ()=>{
        if(exitsItem){
            dispatch(updateCart(item.id, 1));
        }
        else {  
            dispatch(addToCart(item.id, item));
        }
        
    }
    const handleDetail = ()=>{
        navigation(`/${item.id}`);
    }
    return(
        <>
            <div className="product__item" >
                <div className="product__image" onClick={handleDetail} >
                    <img src={item.thumbnail} alt={item.title}/>
                </div>
                <div className="product__infor" onClick={handleDetail}>
                    <div className="product__title">
                        {item.title}
                    </div>
                    <div className="price-new">{priceNew}$</div>
                    <div className="price-old"> {item.price}$</div>
                    <div className="precent"> {percent}$</div>
                </div>
                <button onClick = {handleAddToCart} >Them san pham</button>
            </div>
        </>
    )
}
export default ProductItem;