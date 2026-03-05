import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="sub-title">Spray</span>

        <h1>
          The World of Spray <br /> Techniques
        </h1>

        <p>
          The art of spray painting encapsulates an explosion of colors and creativity.
          With a swift movement, aerosol cans release a fine mist that transforms
          ordinary surfaces into vibrant masterpieces.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Check More Products</button>
          <button className="play-btn">▶ play video</button>
        </div>

        <div className="hero-features">
          <div>🎁 Finished products <br /> products and gift wrapping</div>
          <div>⚙ Large and frequent <br /> promotions with numerous discounts</div>
          <div>🚚 Free shipping <br /> on any order from $150</div>
        </div>
      </div>

      {/* RIGHT PRODUCT CARD */}
      <div className="hero-right">
        <div className="product-card">
          <span className="discount">20%</span>

          <img src="/img/img1.png" alt="Perfume" />

          <h4>Rihanna</h4>
          <h3>Pegasus Eau De Parfum</h3>

          <div className="weight">Weight: 60ml</div>

          <div className="rating">★★★★☆</div>

          <div className="price">
            <span>$20.00</span>
            <del>$25.00</del>
          </div>

          <button className="add-btn">Add to Cart</button>
        </div>
      </div>

      {/* RIGHT SIDE NUMBERS */}
      <div className="side-numbers">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>

    </section>
  );
};

export default Hero;