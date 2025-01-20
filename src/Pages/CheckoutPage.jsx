// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useShop } from './Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice } = useShop();
  const [paymentInfo, setPaymentInfo] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentInfo === '') {
      alert('Please provide payment information.');
    } else {
      alert('Payment successful!');
      navigate('/'); // Redirect to homepage after successful payment
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
          <input
            type="text"
            placeholder="Enter payment details"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
          />
          <button onClick={handlePayment}>Make Payment</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
