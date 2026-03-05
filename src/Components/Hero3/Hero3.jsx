import React, { useState, useRef } from "react";
import "./Hero3.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Carlisle Eau De Parfum",
    brand: "Rihanna",
    price: 25,
    weight: "60ml",
    img: "https://via.placeholder.com/200x250/000000/FFFFFF?text=Carlisle",
    hoverImg:
      "https://via.placeholder.com/200x250/333333/FFFFFF?text=Carlisle+Back",
  },
  {
    id: 2,
    name: "Althair Eau De Parfum",
    brand: "Rihanna",
    price: 20,
    oldPrice: 25,
    weight: "75ml",
    img: "https://via.placeholder.com/200x250/a0522d/FFFFFF?text=Althair",
    hoverImg:
      "https://via.placeholder.com/200x250/8b4513/FFFFFF?text=Althair+Back",
  },
  {
    id: 3,
    name: "Pegasus Eau De Parfum",
    brand: "Rihanna",
    price: 20,
    oldPrice: 25,
    weight: "60ml",
    img: "https://via.placeholder.com/200x250/cccccc/000000?text=Pegasus",
    hoverImg:
      "https://via.placeholder.com/200x250/eeeeee/000000?text=Pegasus+Back",
  },
   {
    id: 3,
    name: "Pegasus Eau De Parfum",
    brand: "Rihanna",
    price: 20,
    oldPrice: 25,
    weight: "60ml",
    img: "https://via.placeholder.com/200x250/cccccc/000000?text=Pegasus",
    hoverImg:
      "https://via.placeholder.com/200x250/eeeeee/000000?text=Pegasus+Back",
  },
   {
    id: 3,
    name: "Pegasus Eau De Parfum",
    brand: "Rihanna",
    price: 20,
    oldPrice: 25,
    weight: "60ml",
    img: "https://via.placeholder.com/200x250/cccccc/000000?text=Pegasus",
    hoverImg:
      "https://via.placeholder.com/200x250/eeeeee/000000?text=Pegasus+Back",
  },
   {
    id: 3,
    name: "Pegasus Eau De Parfum",
    brand: "Rihanna",
    price: 20,
    oldPrice: 25,
    weight: "60ml",
    img: "https://via.placeholder.com/200x250/cccccc/000000?text=Pegasus",
    hoverImg:
      "https://via.placeholder.com/200x250/eeeeee/000000?text=Pegasus+Back",
  },
];

const Hero3 = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const scrollRef = useRef();

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setIsCartOpen(true); // open mini cart
  };

  // ✅ Close cart when clicking outside
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const freeShippingThreshold = 900;

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    // Click outside closes cart
    <div className="hero-container" onClick={closeCart}>
      <h2 className="section-title">Our Perfumes</h2>

      <button
        className="scroll-btn left"
        onClick={(e) => {
          e.stopPropagation();
          scrollLeft();
        }}
      >
        ◀
      </button>

      {/* Stop closing cart when clicking inside products */}
      <div
        className="product-grid"
        ref={scrollRef}
        onClick={(e) => e.stopPropagation()}
      >
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {product.oldPrice && <span className="badge discount">20%</span>}
              <span className="badge new">New</span>
              <img
                src={product.img}
                alt={product.name}
                className="primary-img"
              />
              <img
                src={product.hoverImg}
                alt={product.name}
                className="hover-img"
              />
              <div className="side-actions">
                <button className="icon-btn">♡</button>
                <button className="icon-btn">⇄</button>
                <button className="icon-btn">👁</button>
              </div>
            </div>

            <div className="product-info">
              <p className="brand">{product.brand}</p>
              <h3>{product.name}</h3>
              <div className="weight-selector">
                Weight:
                <select>
                  <option>{product.weight}</option>
                </select>
              </div>
              <div className="rating">★★★★★</div>
              <div className="price-row">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                )}
                <button
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart 🛍️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="scroll-btn right"
        onClick={(e) => {
          e.stopPropagation();
          scrollRight();
        }}
      >
        ▶
      </button>

      {/* MINI CART */}
      {/* Stop closing cart when clicking inside mini cart */}
      <div
        className={`mini-cart ${isCartOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <p>
            You're <b>${(freeShippingThreshold - subtotal).toFixed(2)}</b> away from <b>FREE shipping</b>
          </p>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="cart-items">
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Weight: {item.weight}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="footer-stats">
            <div>
              <span>Total Item</span> <b>{cart.length}</b>
            </div>
            <div>
              <span>Subtotal</span> <b>${subtotal.toFixed(2)}</b>
            </div>
          </div>
          <div className="footer-btns">
            <button className="view-cart">View Cart</button>
            <button className="checkout">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;