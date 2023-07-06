import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import MiniCart from "../../components/MiniCart";
import SearchProduct from "../../components/SearchProduct";
import CategoryOption from "../../components/CategoryOption";
function LayoutDefault() {
  return (
    <>
      <header className="header">
        <div className="Logo">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className="Cart">
          <MiniCart />
        </div>
      </header>
      <main className="main">
        <div className="navigation">
          <CategoryOption/>
          <SearchProduct />
        </div>

        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </>
  );
}
export default LayoutDefault;
