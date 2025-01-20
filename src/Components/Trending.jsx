
import React from "react";
import { trendingProducts } from "./data2";
import "./Trending.css";

const Trending = () => (
  <div className="trending-page">
    {trendingProducts.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </div>
    ))}
  </div>
);

export default Trending;
