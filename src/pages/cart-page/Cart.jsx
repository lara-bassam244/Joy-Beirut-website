// src/pages/Cart-page/Cart.jsx
import { useState } from "react";
import "./cart.css";

import Navbar from "../../components/nav-bar/Navbar";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../components/cart-info/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, subtotal } = useCart();

  // Right side form states (frontend-only)
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handlePay = () => {
    // frontend only: no real payment
    console.log("Pay for order", {
      cart,
      subtotal,
      delivery: { email, address },
      payment: { cardNumber, endDate, cvv, accepted },
    });
  };

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="cart-container">
          <div className="cart-layout">
            {/* LEFT */}
            <div className="cart-left">
              <h2 className="cart-left-title">Budget</h2>

              <div className="cart-items">
                <div className="cart-head-row">
                  <span>Products</span>
                  <span>Quantity</span>
                  <span>Price</span>
                  <span></span>
                </div>

                {cart.length === 0 ? (
                  <p className="cart-empty">Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="cart-row">
                      <div className="cart-product">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-product-info">
                          <p className="cart-product-name">{item.name}</p>
                          {item.type === "bundle" && (
                            <p className="cart-product-sub">Custom Bundle</p>
                          )}
                        </div>
                      </div>

                      <div className="cart-qty">
                        <button
                          className="qty-btn"
                          onClick={() => decreaseQty(item.id)}
                          type="button"
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="qty-num">{item.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => increaseQty(item.id)}
                          type="button"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-price">${item.price}</div>

                      <button
                        className="cart-remove"
                        onClick={() => removeItem(item.id)}
                        type="button"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}

                {cart.length > 0 && (
                  <div className="cart-subtotal-row">
                    <span>Subtotal</span>
                    <strong>${subtotal}</strong>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="cart-right">
              <h3 className="cart-right-title">Delivery information</h3>

              <div className="cart-orange-box">
                <label className="cart-label">Email</label>
                <input
                  className="cart-dark-input"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="cart-label">Address</label>
                <input
                  className="cart-dark-input"
                  type="text"
                  placeholder="Beirut, Kantari Suites"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <h3 className="cart-right-title">Payment Details</h3>

              <div className="cart-orange-box">
                <div className="card-header">
                  <p className="card-header-title">Card Information</p>
                  <div className="card-divider"></div>
                </div>

                <label className="cart-label">Card Number</label>
                <input
                  className="cart-dark-input"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <div className="cart-two-cols">
                  <div>
                    <label className="cart-label">End Date</label>
                    <input
                      className="cart-dark-input small"
                      type="text"
                      placeholder="MM/YYYY"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="cart-label">CVV</label>
                    <input
                      className="cart-dark-input small"
                      type="text"
                      placeholder="***"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>
                </div>

                <label className="cart-check-row">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <span>
                    I have read and accepted the terms of use and privacy policy
                  </span>
                </label>
              </div>

              <button
                className="pay-btn"
                type="button"
                disabled={!accepted || cart.length === 0}
                onClick={handlePay}
              >
                Pay For Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
