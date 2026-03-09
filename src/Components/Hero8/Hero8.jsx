import React from "react";
import "./Hero8.css";

const Hero8 = () => {
  return (
    <section className="hero8">

      {/* LEFT CONTENT */}
      <div className="hero8-text">
        <h2>Power, and Practicality</h2>
        <h3>Manufacturing Processes</h3>

        <p>
          Sprays represent a wide range of applications across
          industries, sciences, arts, and daily life.
        </p>

        <button className="hero8-btn">
          Check More Products 👜
        </button>
      </div>


      {/* CENTER IMAGE */}
      <div className="hero8-image">
        <img src="/img/img8.png" alt="Perfume Bottle" />
      </div>


      {/* RIGHT CONTENT */}
      <div className="hero8-text">
        <h2>The Artistry of Atomization</h2>
        <h3>Diving into Spray</h3>

        <p>
          Spray techniques transform liquids into fine mist
          used in fragrance, medicine, and industries.
        </p>

        <button className="hero8-btn">
          Check More Products 👜
        </button>
      </div>

    </section>
  );
};

export default Hero8;