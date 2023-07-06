import LayoutDefault from "../Layout/LayoutDefault";
import Cart from "../Pages/Cart";
import Category from "../Pages/Category";
import DetailProudct from "../Pages/DetailProduct";
import Home from "../Pages/Home";
import Search from "../Pages/Search";

export const routes = [
    {
        path: "/",
        element : <LayoutDefault/>,
        children: [
            {
                index : true,
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path: ":id",
                element: <DetailProudct/>,
                
            },
            {
                path: "/category",
                element: <Category/>,
                
            },
            {
                path: "*",
                element: <Home/>,
                
            }
        ]
    }
]
