import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../Components/Products";
import { getProducts } from "../Redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="homeProductsPage">
        {products.map((e) => (
          <Products key={e.id} products={e} add={"Add to cart"} />
        ))}
      </div>
    </>
  );
};

export default Home;
