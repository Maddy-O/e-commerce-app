import "./Navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <button onClick={() => navigate("/")}>Products</button>
      <button onClick={() => navigate("/cart")}>Cart</button>
    </div>
  );
};

export default Navbar;
