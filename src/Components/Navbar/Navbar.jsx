

import './navbar.css';
import logo from '../../Assets/log.png';
import nav_dropdown from '../../Assets/nav_dropdown.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import { FaShoppingCart } from 'react-icons/fa'; 
import { useState, useRef } from 'react';
import { useShop } from '../../Context/ShopContext'; 
const Navbar = ({ onSearch }) => { 
  const [menu, setMenu] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef();
  const navigate = useNavigate();


  const { cartItems, cartCount } = useShop();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleCategoryClick = (category) => {
    setMenu(menu === category ? '' : category);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (searchQuery.trim()) {
      onSearch(searchQuery); // Pass the search query to the parent component
      navigate(`/?search=${searchQuery}`); // Redirect to the homepage with the search query
    }
    setSearchQuery(''); // Reset the search query
    setIsSearchOpen(false); // Close the search container
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Shopper Logo" />
        </Link>
        <p>LuxeStore</p>
      </div>

      {/* Menu Toggle Button */}
      <img
        className="nav_dropdown"
        src={nav_dropdown}
        alt="Menu Toggle"
        onClick={dropdownToggle}
      />

      <ul ref={menuRef} className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={() => handleCategoryClick('shop')}>Shop</button>
          {menu === 'shop' && (
            <ul className="sub-menu">
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/fashion">Fashion</Link>
              </li>
              <li>
                <Link to="/vehicles">Vehicles</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => handleCategoryClick('blog')}>Blog</button>
          {menu === 'blog' && (
            <ul className="sub-menu">
              <li>
                <Link to="/blog">Latest Posts</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Search and Cart Section */}
      <div className="nav-login-cart">
        {/* Search Icon */}
        <button className="search-icon-button" onClick={handleSearchClick}>
          <FaSearch size={20} />
        </button>

        {/* Search Container */}
        {isSearchOpen && (
          <div className="search-container">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                placeholder="Type here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        )}

        {/* Cart Section with New Icon */}
        <Link to="/cart" className="nav-cart-icon">
          <FaShoppingCart size={24} /> {/* Use FaShoppingCart icon */}
          {cartCount > 0 && <div className="nav-cart-count">{cartCount}</div>} {/* Dynamic cart count */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
