import React, { useRef } from "react";
import "./Hero10.css";

const articles = [
  {
    id: 1,
    title: "The Scented Haven",
    text: "Our raw materials derived from nature delivered to us with love by the farmers and the distillers.",
    date: "November 16, 2023",
    img: "/img/i1.png"
  },
  {
    id: 2,
    title: "Aromatics Anonymous",
    text: "We understand that fragrances are subjective. So break the seal, open the cap and try the perfume.",
    date: "November 16, 2023",
    img: "/img/i2.png"
  },
  {
    id: 3,
    title: "The Perfume Diaries",
    text: "Fragrance microcapsule pigment is an encapsulated fragrance produced by micro-encapsulation technology.",
    date: "November 16, 2023",
    img: "/img/i3.png"
  },
  {
    id: 4,
    title: "Sentimental Surprises",
    text: "Aromatic microcapsule slowly releases a subtle fragrance removing odor.",
    date: "November 16, 2023",
    img: "/img/i4.png"
  },
   {
    id: 5,
    title: "Sentimental Surprises",
    text: "Aromatic microcapsule slowly releases a subtle fragrance removing odor.",
    date: "November 16, 2023",
    img: "/img/i5.png"
  },
   {
    id: 6,
    title: "Sentimental Surprises",
    text: "Aromatic microcapsule slowly releases a subtle fragrance removing odor.",
    date: "November 16, 2023",
    img: "/img/i6.png"
  },
];

const Hero10 = () => {

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  return (
    <section className="hero10">

      <h2>Revolutionizing Innovation and Practicality</h2><br></br>

      <p>
        From creating backgrounds in mixed media artworks to achieving unique
        patterns in abstract paintings, sprays offer a modern twist to
        artistic expression.
      </p>

      <div className="slider-wrapper">

        <button className="nav-btn left" onClick={scrollLeft}>
          ←
        </button>

        <div className="card-container" ref={scrollRef}>

          {articles.map((item) => (
            <div className="card" key={item.id}>

              <img src={item.img} alt="" />

              <div className="card-content">

                <span className="article">Article</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="card-footer">

                 <button className="read-btn">
  Read More <span>→</span>
</button>

                  <span className="date">{item.date}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          →
        </button>

      </div>

    </section>
  );
};

export default Hero10;