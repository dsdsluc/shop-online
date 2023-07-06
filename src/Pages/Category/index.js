import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../../services/Product";
import { addToCart, updateCart } from "../../action/cart";
import { useNavigate } from "react-router-dom";
function Category() {
  const category = useSelector((state) => state.category);
  const [product, setProduct] = useState([]);
  const cart = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handleAddToCart = (id,item) => {
    const exitsItem = cart.some((i) => i.id === id);
    if (exitsItem) {
      dispatch(updateCart(id, 1));
    } else {
      dispatch(addToCart(id, item));
    }
  };
  const handleDetail = (id) => {
    navigation(`/${id}`);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const response = await filterProduct(category);
      setProduct(response);
    };
    fetchApi();
  }, [category]);
  console.log(product);
  return (
    <>
      {product.length > 0 ? (
        <div className="product">{
            product.map((item) => {
                const percent = item.discountPercentage.toFixed(0);
                const priceNew = ((item.price * (100 - percent)) / 100).toFixed(0);
                return (
                  
                    <div className="product__item">
                      <div className="product__image" onClick={()=>handleDetail(item.id)}>
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="product__infor" onClick={handleDetail}>
                        <div className="product__title">{item.title}</div>
                        <div className="price-new">{priceNew}$</div>
                        <div className="price-old"> {item.price}$</div>
                        <div className="precent"> {percent}$</div>
                      </div>
                      <button onClick={()=>handleAddToCart(item.id,item)}>Them san pham</button>
                    </div>
                  
                );
              })
        }
        </div>
      ) : (
        <>Dang load du lieu</>
      )}
    </>
  );
}
export default Category;
