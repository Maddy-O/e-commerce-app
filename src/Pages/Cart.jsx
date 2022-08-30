import React, { useEffect, useState } from "react";
import Products from "../Components/Products";

const Cart = () => {
  const [cart, setToCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    setToCart(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        {cart?.map((e) => (
          <Products key={e.id} products={e} add={"Remove"} />
        ))}
      </div>
    </>
  );
};

export default Cart;
