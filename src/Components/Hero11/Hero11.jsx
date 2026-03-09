import React, { useRef } from "react";
import "./Hero11.css";

const reviews = [
  {
    id: 1,
    title: "Great Products !!",
    text: "Sprays also facilitate cooling systems in industries dealing with high-temperature processes.",
    name: "Ewan Sharpe, Developer",
    rating: "4.5 / 5.0",
    img: "/img/r1.png"
  },
  {
    id: 2,
    title: "Great Customer Support",
    text: "Agriculture benefits significantly from sprays, employing them for the controlled distribution.",
    name: "John Doe, Client",
    rating: "4.5 / 5.0",
    img: "/img/r2.png"
  },
  {
    id: 3,
    title: "Amazing Quality",
    text: "The fragrance lasts long and the bottle design is very premium.",
    name: "Sophia Lee, Designer",
    rating: "4.7 / 5.0",
    img: "/img/r3.png"
  },
  {
    id: 4,
    title: "Loved It",
    text: "Very smooth fragrance with elegant packaging and excellent delivery service.",
    name: "Michael Ross, Customer",
    rating: "4.6 / 5.0",
    img: "/img/r4.png"
  }
];

const Hero11 = () => {

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  };

  return (
    <section className="hero11">

      <h2>Testimonials</h2>

      <div className="testimonial-wrapper">

        <button className="arrow left" onClick={scrollLeft}>←</button>

        <div className="testimonial-container" ref={scrollRef}>

          {reviews.map((item) => (
            <div className="review-card" key={item.id}>

              <img src={item.img} alt="" className="review-img" />

              <div className="review-content">

                <div className="review-top">
                  <h3>{item.title}</h3>
                  <span className="rating">★★★★☆ {item.rating}</span>
                </div>

                <p>{item.text}</p>

                <h4>{item.name}</h4>

              </div>

            </div>
          ))}

        </div>

        <button className="arrow right" onClick={scrollRight}>→</button>

      </div>

    </section>
  );
};

export default Hero11;