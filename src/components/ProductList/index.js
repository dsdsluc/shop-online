import { useEffect, useState } from "react";
import { getProduct } from "../../services/Product";
import ProductItem from "../../components/ProductItem";
function ProducList (){
    const [productList, setProductList] = useState([])
   
    useEffect(()=>{
        const fetchApi = async ()=>{
            const response = await getProduct();
            setProductList(response);
        }
        fetchApi();
    },[])
    
    
    return(
       <>
        {productList.length > 0 ? (
            <>
                <div className="product">
                    {productList.map(item=>(
                        <ProductItem item  = {item} key={item.id} />
                    ))}
                </div>
            </>
           ):(
            <>
                Dang load du lieu
            </>
           )}
       </>
    )
}
export default ProducList