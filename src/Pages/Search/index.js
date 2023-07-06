import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../services/Product";
import { addToCart, updateCart } from "../../action/cart";

function Search() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const param = useSelector((state) => state.searchProduct);
  const cart = useSelector(state =>state.addToCart);
  useEffect(()=>{
    const fetchApi = async () => {
      const response = await searchProduct(param);
      setProduct(response);
    };
    fetchApi();
  },[param]);
  
  const handleAddToCart = (id, item)=>{
    const exitsItem = cart.some(i=>(
        i.id === item.id
    ));
    if(exitsItem){
        dispatch(updateCart(id, 1));
    }
    else {  
        dispatch(addToCart(id, item));
    }
    
}
  return (
    <>
      {product.length > 0 ? (
        <div className="product">
          {product.map((item) => {
            const percent = item.discountPercentage.toFixed(0);
            const priceNew = (item.price * (100 - percent ) /100).toFixed(0);
            return (
              <div className="product__item" key={item.id}>
                <div className="product__image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="product__infor">
                  <div className="product__title">{item.title}</div>
                  <div className="price-new">{priceNew}$</div>
                  <div className="price-old"> {item.price}$</div>
                  <div className="precent"> {percent}$</div>
                </div>
                <button onClick={()=>handleAddToCart(item.id, item)}>Them san pham</button>
              </div>
            );
          })}
        </div>
      ) : (
        <>Ko tim thay san pham nao</>
      )}
    </>
  );
}
export default Search;
