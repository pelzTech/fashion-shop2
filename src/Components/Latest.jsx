import React from "react";
import { latestProducts } from "../data/data2"; 
import { AiOutlineArrowRight } from "react-icons/ai"; 
import { useNavigate } from "react-router-dom"; 
import { useShop } from "../Context/ShopContext"; 
import "./Latest.css";

const Latest = () => {
  const navigate = useNavigate();
  const { addToCart } = useShop(); 

  return (
    <div className="latest-container">
      <h1 className="latest-header">Latest Products</h1>
      <div className="latest-page">
        {latestProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)} 
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div
        className="navigate-latest"
        onClick={() => navigate("/latest")}
        title="Go to Latest Page"
      >
        <AiOutlineArrowRight className="arrow-icon" />
      </div>
    </div>
  );
};

export default Latest;
