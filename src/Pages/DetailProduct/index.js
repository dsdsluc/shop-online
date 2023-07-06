import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../services/Product";
import "./DetailProuct.css";

function DetailProudct() {
  const param = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await detailProduct(param.id);
      setProduct(response);
    };
    fetchApi();
  }, [param]);
  console.log(product);
  return (
    <>
      {product ? (
        <div className="productdetail">
          <div className="detail__main">
            <div className="detail__banner">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="detail__infor">
              <div className="detail__title">{product.title}</div>
              <div className="detail__desc">{product.description}</div>
              <div className="detail__price--new">
                Gia uu dai:{" "}
                {(
                  (product.price * (100 - product.discountPercentage)) /
                  100
                ).toFixed(0)}
                $
              </div>
              <div className="detail__discount">
                Giam gia: {product.discountPercentage}%
              </div>
              <div className="detail__price--old">
                Gia goc: {product.price}$
              </div>
            </div>
          </div>

          <div className="detail__images">
            {product.images.map((item, index) => {
              return <img src={item} key={index} alt={product.title} />;
            })}
          </div>
        </div>
      ) : (
        <>Dang load du lieu</>
      )}
    </>
  );
}
export default DetailProudct;
