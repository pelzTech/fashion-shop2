// src/Components/Cart.jsx
import { useNavigate } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';
import './Cart.css';


const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useShop();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment'); // Redirect to payment page
  };

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to home page for shopping
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display total price */}
          <div className="total-price">
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>

          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
