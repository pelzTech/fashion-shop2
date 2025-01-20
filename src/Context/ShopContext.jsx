// src/context/ShopContext.jsx

// Import necessary hooks and context
import React, { createContext, useState, useContext } from 'react';

// Create ShopContext to hold global cart state
export const ShopContext = createContext();

// Custom hook to access shop context
export const useShop = () => useContext(ShopContext);

// ShopProvider component to wrap the entire app and provide context
export const ShopProvider = ({ children }) => {
  // State to track items in the cart
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State to track the total count of items in the cart

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setCartCount((prevCount) => prevCount + 1);
  };

  // Remove an item from the cart by its ID
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === itemId);

      if (itemToRemove) {
        setCartCount((prevCount) => prevCount - itemToRemove.quantity);
      }

      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  // Get the total price of all items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Provide the context value for components to use
  return (
    <ShopContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, getTotalPrice }}
    >
      {children} {/* Render children components */}
    </ShopContext.Provider>
  );
};
