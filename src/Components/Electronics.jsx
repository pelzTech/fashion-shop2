import React, { useState } from 'react';
import { FaCartPlus, FaArrowLeft } from 'react-icons/fa'; 
import { useShop } from '../Context/ShopContext'; 
import products from '../data/products';
import './Electronics.css';

const getCategoryData = (category) => {
  return products.find((product) => product.category === category);
};

const CategoryViewer = ({ data }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { addToCart } = useShop(); 


  if (!data) return <p>Category not found.</p>;

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>{data.category}</h1>
        <img src={data.image} alt={data.category} className="category-image" />
        <p>{data.description}</p>
      </div>

      {!selectedSubCategory && data.subCategories && (
        <div className="subcategories">
          <ul>
            {data.subCategories.map((sub) => (
              <li key={sub.name}>
                <button className="sub-category-btn" onClick={() => setSelectedSubCategory(sub)}>
                  {sub.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedSubCategory && (
        <div className="subcategory-details">
          <button
            className="back-btn"
            onClick={() => setSelectedSubCategory(null)}
          >
            <FaArrowLeft /> Back
          </button>
          <h2>{selectedSubCategory.name}</h2>
          <img src={selectedSubCategory.image} alt={selectedSubCategory.name} className="subcategory-image" />
          <p>{selectedSubCategory.description}</p>

          {selectedSubCategory.subCategories && (
            <div className="items-list">
              <ul>
                {selectedSubCategory.subCategories.map((item, index) => (
                  <li key={index} className="item-card">
                    <button className="item-btn" onClick={() => setSelectedItem(item)}>
                      <strong>{item.name}</strong>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {selectedItem && (
        <div className="item-details">
          <button
            className="back-btn"
            onClick={() => setSelectedItem(null)}
          >
            <FaArrowLeft /> Back
          </button>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          <img src={selectedItem.image} alt={selectedItem.name} className="item-image" />
          <p>
            <strong>Price:</strong> ${selectedItem.price}
          </p>
          <p>
            <strong>Discount Price:</strong> ${selectedItem.discountPrice}
          </p>
          <button
            className="add-to-cart-btn"
            onClick={() => {
              addToCart(selectedItem); 
              alert(`"${selectedItem.name}"`);
            }}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

const Electronics = () => {
  const electronicsData = getCategoryData('Electronics');
  return <CategoryViewer data={electronicsData} />;
};

export default Electronics;
