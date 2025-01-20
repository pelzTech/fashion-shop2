import React, { useState, useContext } from "react";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext"; 
import products from "../data/products";
import './Vehicles.css'; 

const getCategoryData = (category) => {
  return products.find((product) => product.category === category);
};

const CategoryViewer = ({ data, searchQuery }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { addToCart } = useContext(ShopContext); 
  if (!data) return <p className="category-not-found">Category not found.</p>;

  const filteredItems = searchQuery
    ? data.subCategories.flatMap((sub) =>
        sub.subCategories.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : [];

  return (
    <div className="category-container">
      <h1 className="category-title">{data.category}</h1>
      <img src={data.image} alt={data.category} className="category-image" />
      <p className="category-description">{data.description}</p>
      {searchQuery && filteredItems.length > 0 ? (
        <div className="search-results">
          <h2>Search Results:</h2>
          <div className="product-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="product-item">
                <button className="product-name" onClick={() => setSelectedItem(item)}>
                  <strong>{item.name}</strong>
                </button>
                <p className="product-price">
                  Price: ${item.price}{" "}
                  {item.discountPrice && (
                    <span className="discount-price">(${item.discountPrice} discounted)</span>
                  )}
                </p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(item)}
                >
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        
        !searchQuery && !selectedSubCategory && data.subCategories && (
          <div className="subcategories-list">
            <ul>
              {data.subCategories.map((sub) => (
                <li key={sub.name}>
                  <button
                    className="subcategory-button"
                    onClick={() => setSelectedSubCategory(sub)}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      )}

      {/* If a subcategory is selected, show its details */}
      {selectedSubCategory && (
        <div className="subcategory-details">
          <button
            className="back-button"
            onClick={() => setSelectedSubCategory(null)}
          >
            <FaArrowLeft /> Back to {data.category}
          </button>
          <h2>{selectedSubCategory.name}</h2>
          <img
            src={selectedSubCategory.image}
            alt={selectedSubCategory.name}
            className="subcategory-image"
          />
          <p>{selectedSubCategory.description}</p>

          {selectedSubCategory.subCategories && (
            <div className="subcategory-items">
              <div className="product-grid">
                {selectedSubCategory.subCategories.map((item, index) => (
                  <div key={index} className="product-item">
                    <button className="product-name" onClick={() => setSelectedItem(item)}>
                      <strong>{item.name}</strong>
                    </button>
                    <p className="product-price">
                      Price: ${item.price}{" "}
                      {item.discountPrice && (
                        <span className="discount-price">(${item.discountPrice} discounted)</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {selectedItem && (
        <div className="item-details">
          <button
            className="back-button"
            onClick={() => setSelectedItem(null)}
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
          <p className="product-price">
            Price: ${selectedItem.price}{" "}
            {selectedItem.discountPrice && (
              <span className="discount-price">(${selectedItem.discountPrice} discounted)</span>
            )}
          </p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(selectedItem)}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

const Vehicles = ({ searchQuery }) => {
  const vehiclesData = getCategoryData("Vehicles");
  return <CategoryViewer data={vehiclesData} searchQuery={searchQuery} />;
};

export default Vehicles;
