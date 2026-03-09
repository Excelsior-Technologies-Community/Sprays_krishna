import React, { useState } from "react";
import "./Hero4.css";

const Hero4 = () => {

  const [playVideo, setPlayVideo] = useState(false);

 return (
  <section
    className="hero4"
    style={{
      backgroundImage: "url('//sprays-workdo.myshopify.com/cdn/shop/files/bg2.png?v=1700132466')"
    }}
  >

      <div className="hero4-overlay">

        <h2>Sprays</h2>

        <h3>The Science and Art of Sprays</h3>

        <p>
          Sprays are a versatile way of dispersing liquids, gases, or fine
          particles into the air or onto a surface, commonly used in perfumes,
          cosmetics, and many everyday products.
        </p>

        <button
          className="play-btn"
          onClick={() => setPlayVideo(true)}
        >
          ▶ Play Video
        </button>

      </div>

      {playVideo && (
        <div className="video-popup">

          <div className="video-box">

            <button
              className="close-btn"
              onClick={() => setPlayVideo(false)}
            >
              ✖
            </button>

           <iframe
         width="100%"
        height="400"
        src="https://www.youtube.com/embed/WhKJl9W_1Fw"
        title="video"
     allowFullScreen
        >       
        </iframe>

          </div>

        </div>
      )}
    </section>
  );
};

export default Hero4;