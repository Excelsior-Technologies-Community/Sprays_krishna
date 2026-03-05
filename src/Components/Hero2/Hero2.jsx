import React from "react";
import "./Hero2.css";

const Hero2 = () => {
  return (
         <section className="hero2">

      <div className="hero2-container">

        {/* LEFT SIDE */}
        <div className="hero2-left">

          <div className="hero2-top">
            <img src="/img/leftp.png" alt="Bottle" className="hero2-left-img"/>
            <h3 className="hero2-subtitle">The Science Behind
                 Spray Dynamics</h3>
          </div>

          <p className="hero2-text">
            In agriculture, the use of spraying technology revolutionizes crop management.
             Farmers employ specialized equipment to disperse pesticides, fertilizers,
              or herbicides across fields.
          </p>

          <div className="hero2-buttons">
            <button className="hero2-btn1">Explore</button>
            <button className="hero2-btn2">Learn More</button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero2-right">

          <img src="/img/rightp.png" alt="Perfume" className="hero2-right-img"/>

          <p className="hero2-right-text">
        product banner right
This precise application method ensures targeted coverage, safeguarding crops from pests, promoting growth, and maximizing yields.

Show more
          </p>

        </div>

      </div>

    </section>
  );
};

export default Hero2;