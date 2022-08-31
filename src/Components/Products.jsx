import "./Products.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Products = ({ products, add }) => {
  const navigate = useNavigate();
  const [cart, setToCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleAddCart = (id) => {
    let items = JSON.parse(localStorage.getItem("cartItems")) || [];
    const ind = items.findIndex((i) => i.id == id);
    console.log(ind);
    if (ind) {
      items.push(products);
      localStorage.setItem("cartItems", JSON.stringify(items));
      console.log(items);
    }
  };

  const handleRemove = (id) => {
    let items = JSON.parse(localStorage.getItem("cartItems")) || [];
    const ind = items.findIndex((i) => i.id == id);
    console.log(items[ind], "  ", ind);
    items.splice(ind, 1);
    if (ind) {
      localStorage.setItem("cartItems", JSON.stringify(items));
      console.log(items);
    }
  };

  return (
    <div
      className="productDiv"
      onClick={() => navigate(`/${products.id}`, { state: products })}
    >
      <img src={products.image_url} alt="#" />
      <div>
        <h5>{products.product_name}</h5>
        <h5>₹ {products.price}</h5>
        <h5>{products.review}</h5>
        {add == "Add to cart" ? (
          <button
            onClick={() => {
              handleAddCart(products.id);
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => {
              handleRemove(products.id);
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
