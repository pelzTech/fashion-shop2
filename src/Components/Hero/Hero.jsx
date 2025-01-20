import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './hero.css';
import cart_icon from '../../Assets/cart_icon.png'; 
import arrow_icon from '../../Assets/arrow.png';
import products from '../../data/products';
import { FaArrowRight } from 'react-icons/fa';
import hero_image from '../../Assets/arrow.png';

const Hero = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('search') || '';
    setSearchQuery(query);

    if (query) {
      const filterProducts = (categories) => {
        return categories.reduce((acc, category) => {
          const filteredSubCategories = category.subCategories.map((subCategory) => {
            const filteredSubSubCategories = subCategory.subCategories.filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            );
            return {
              ...subCategory,
              subCategories: filteredSubSubCategories,
            };
          }).filter((subCategory) => subCategory.subCategories.length > 0);

          if (filteredSubCategories.length > 0) {
            acc.push({ ...category, subCategories: filteredSubCategories });
          }

          return acc;
        }, []); 
      };

      const filtered = filterProducts(products);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);

  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>Discover the Best Deals on Vehicles, Fashion & Electronics</h2>
          <div>
            <div className="hero-cart-icon">
              <p>Shop the latest products</p>
              <img src={cart_icon} alt="cart icon" />
            </div>
            <p>Your one-stop shop for all things online</p>
            <p>Find your perfect product now!</p>
          </div>
          <div className="hero-latest-btn">
            <div>Explore Our Collections</div>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>

        <div className="hero-right">
          <img src={hero_image} alt="hero" />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          gap: '20px',
        }}
      >
        <Link
          to="/latest"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            backgroundColor: '#17203D',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '500',
            transition: '0.3s ease',
          }}
        >
          View Latest
          <FaArrowRight />
        </Link>

        <Link
          to="/favourite"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            backgroundColor: 'RGB(80, 87, 102)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '500',
            transition: '0.3s ease',
          }}
        >
          View Favourite
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
