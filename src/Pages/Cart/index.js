import { useDispatch, useSelector } from "react-redux";
import { delAll, delItem, updateCart } from "../../action/cart";
import "./Cart.css";
function Cart() {
  const cart = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => {
    const percent = parseInt(item.infor.discountPercentage).toFixed(0);
    const newPrice = (
      (parseInt(item.infor.price) * (100 - percent)) /
      100
    ).toFixed(0);
    return sum + newPrice * item.quanity;
  }, 0);
  const handleDeleteCart = (id) => {
    console.log(id);
    dispatch(delItem(id));
  };
  const handleUp = (id) => {
    dispatch(updateCart(id, 1));
  };
  const handleDown = (id) => {
    const itemDown = cart.find((item) => item.id === id);
    if (itemDown.quanity > 1) {
      dispatch(updateCart(id, -1));
    }
  };
  const handleDeleteAll = () => {
    dispatch(delAll()); 
  };
  return (
    <>
      <h2>Gio hang</h2>
      {cart.length > 0 ? (
        <>
            <div className="delete__all">
                <button onClick={handleDeleteAll}>Xoa tat ca</button>
            </div>
          
          <div className="cart">
            {cart.map((item) => {
              const percent = parseInt(item.infor.discountPercentage).toFixed(
                0
              );
              const newPrice = (
                (parseInt(item.infor.price) * (100 - percent)) /
                100
              ).toFixed(0);
              return (
                <div className="cart__item" key={item.id}>
                  <div className="cart__image">
                    <img src={item.infor.thumbnail} alt={item.infor.title} />
                  </div>
                  <div className="cart__infor">
                    <div className="cart__title">{item.infor.title}</div>
                    <div className="cart__price--new">{newPrice}$</div>
                    <div className="cart__price--old">{item.infor.price}$</div>
                    <div className="cart__price--lod">{percent}%</div>
                  </div>
                  <div className="cart__meta">
                    <div className="quanity">
                      <button onClick={() => handleUp(item.id)}>+</button>
                      {item.quanity}
                      <button onClick={() => handleDown(item.id)}>-</button>
                    </div>
                    <button onClick={() => handleDeleteCart(item.id)}>
                      {" "}
                      Xoa{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>Chua co san pham nao trong gio hang</>
      )}
      <h3 className="cart__total">Tong tien la : {total} $ </h3>
    </>
  );
}
export default Cart;
