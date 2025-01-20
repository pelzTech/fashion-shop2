import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import Electronics from './Components/Electronics';
import Vehicles from './Components/Vehicles';
import Fashion from './Components/Fashion';
import Latest from './Components/Latest';
import Favourite from './Components/Favourite';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Footer from './Components/Footer';


// Blog components
import Blog from './Components/Blog'; // Parent Blog Route
import LatestBlog from './Components/LatestBlog'; // Latest blogs child route
import About from './Components/About'; // About child route

// Shop Context
import { ShopProvider } from './Context/ShopContext'; // Import the ShopProvider

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query

  // Handle search submit to update searchQuery state
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ShopProvider> {/* Wrap the app with ShopProvider to enable context */}
      <BrowserRouter>
        <Navbar onSearch={handleSearch} /> {/* Pass search handler to Navbar */}
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />

          {/* Shop Category Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fashion" element={<Fashion searchQuery={searchQuery} />} />
          <Route path="/vehicles" element={<Vehicles searchQuery={searchQuery} />} />
          <Route path="/electronics" element={<Electronics searchQuery={searchQuery} />} />

          {/* Product and Cart Routes */}
          {/* Add routes for the Cart and Product Details if needed */}

          {/* Login and Signup Route */}
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/favourite" element={<Favourite />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />}>
            <Route path="blog/latestblog/:id" element={<LatestBlog />} />
    
          </Route>
        </Routes> 
        <Footer /> {/* Add Footer here */}
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
