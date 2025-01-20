import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewaLetter/NewsLetter";
import './Home.css';

const Shop = () => {
  const location = useLocation(); // Hook to access the location object
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Extract search query from the URL
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('search') || ''; // Default to empty if no query is provided
    setSearchQuery(query);
  }, [location.search]); // Re-run when the search query in the URL changes

  return (
    <div>
      {/* Search Results Section */}
      {searchQuery && (
        <div>
          <h2>Showing results for: "{searchQuery}"</h2>
          <p>No products to display.</p>
        </div>
      )}

      {/* Main Shop Content */}
      <Hero />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
