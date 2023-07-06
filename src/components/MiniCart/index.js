import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function MiniCart (){
    const cart = useSelector(state => state.addToCart);
    const cartNum = cart.reduce((sum, item)=>{
        return sum + item.quanity;
    },0)
    return(
        <>
            <Link to={"/cart"}>Cart({cartNum})</Link>
        </>
    )

}
export default MiniCart