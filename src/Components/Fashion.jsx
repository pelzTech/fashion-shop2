import React, { useState } from "react";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa"; 
import { useShop } from "../Context/ShopContext";
import products from "../data/products";
import './Fashion.css';

const getCategoryData = (category) => {
  return products.find((product) => product.category === category);
};

const Fashion = ({ searchQuery }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { addToCart } = useShop();

  const fashionData = getCategoryData("Fashion");

  if (!fashionData) return <p>Category not found.</p>;

  const filteredSubCategories = fashionData.subCategories.filter((sub) =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItems =
    selectedSubCategory &&
    selectedSubCategory.subCategories.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`"${item.name}" has been added to the cart!`);
  };

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>{fashionData.category}</h1>
        <img
          src={fashionData.image}
          alt={fashionData.category}
          className="category-image"
        />
        <p className="category-description">{fashionData.description}</p>
      </div>

      {!selectedSubCategory && (
        <div className="subcategories">
          {filteredSubCategories.length > 0 ? (
            <>
              <ul>
                {filteredSubCategories.map((sub) => (
                  <li key={sub.name} className="subcategory-item">
                    <button
                      className="subcategory-button"
                      onClick={() => setSelectedSubCategory(sub)}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No results found for "{searchQuery}".</p>
          )}
        </div>
      )}

      {/* Display Items within a Subcategory */}
      {selectedSubCategory && (
        <div className="subcategory-details">
          <button
            className="back-button"
            onClick={() => setSelectedSubCategory(null)} // Return to the parent category
          >
            <FaArrowLeft /> Back
          </button>
          <h2>{selectedSubCategory.name}</h2>
          <img
            src={selectedSubCategory.image}
            alt={selectedSubCategory.name}
            className="subcategory-image"
          />
          <p>{selectedSubCategory.description}</p>

          {filteredItems && filteredItems.length > 0 ? (
            <div className="items-list">
              <ul>
                {filteredItems.map((item, index) => (
                  <li key={index} className="item">
                    <button
                      className="item-button"
                      onClick={() => setSelectedItem(item)}
                    >
                      <strong>{item.name}</strong>
                    </button>
                    <p className="item-price">
                      Price: ${item.price}
                      {item.discountPrice && (
                        <span className="discount-price"> (${item.discountPrice} discounted)</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No results found for "{searchQuery}".</p>
          )}
        </div>
      )}

      {/* Display Item Details */}
      {selectedItem && (
        <div className="item-details">
          <button
            className="back-button"
            onClick={() => setSelectedItem(null)} // Return to the subcategory
          >
            <FaArrowLeft /> Back
          </button>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="item-image"
          />
          <p className="item-price">
            Price: ${selectedItem.price}
            {selectedItem.discountPrice && (
              <span className="discount-price"> (${selectedItem.discountPrice} discounted)</span>
            )}
          </p>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(selectedItem)}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Fashion;
