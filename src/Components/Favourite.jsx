import React from "react";
import { favouriteProducts } from "../data/data2"; 
import { useShop } from "../Context/ShopContext"; 

import './Favourite.css';

const Favourite = () => {
  const { addToCart } = useShop(); 

  return (
    <div className="favourite-page">
      {favouriteProducts.map((product) => (
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
  );
};

export default Favourite;
