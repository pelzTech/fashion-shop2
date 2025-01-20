// src/Components/Payment.jsx
import { useShop } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Payment.css';


const Payment = () => {
  const { cartItems } = useShop();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Placeholder function for processing payment
  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method before proceeding.');
      return;
    }

    alert(`Your payment via ${selectedPaymentMethod} has been accepted!`);
    navigate('/'); // Redirect to the home page after payment
  };

  return (
    <div className="payment-page">
      <h2>Proceed to Payment</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding.</p>
      ) : (
        <div>
         <h3>Your Shopping Cart</h3>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3>
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>

          <h3>Select Payment Method:</h3>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Bank Card"
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              Bank Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Apple Pay"
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              Apple Pay
            </label>
          </div>

          <button onClick={handlePayment} disabled={!selectedPaymentMethod}>
            Submit Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
