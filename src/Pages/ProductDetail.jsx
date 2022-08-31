import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addProductReview } from "../Redux/action";

const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddReview = () => {
    let payload = { id: id, review: review };
    dispatch(addProductReview(payload));
    alert("review add successfull");
    navigate("/");
  };

  console.log(id, state);
  return (
    <div className="productDetails">
      <img src={state.image_url} alt="#" />
      <div>
        <h4>Name :</h4>
        <p>{state.product_name}</p>
      </div>
      <div>
        <h4>Price :</h4>
        <p>₹ {state.price}</p>
      </div>
      <div>
        <h4>Review :</h4>
        <h4>{state.review}</h4>
      </div>
      <div>
        <input
          placeholder="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={handleAddReview}>Add</button>
      </div>
    </div>
  );
};

export default ProductDetail;
