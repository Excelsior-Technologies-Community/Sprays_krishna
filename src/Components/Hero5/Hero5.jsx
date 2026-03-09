import React, { useState, useRef } from "react";
import "./Hero5.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Dolce&Gabbana Eau De",
    brand: "Arabic",
    category: "fragrance",
    price: 15,
    weight: "100ml",
    img: "/img/f1.png",
    hoverImg: "/img/f11.png",
  },
  {
    id: 2,
    name: "Cologne To The Races",
    brand: "Arabic",
    category: "fragrance",
    price: 20,
    weight: "75ml",
    img: "/img/f2.png",
    hoverImg: "/img/f22.png",
  },
  {
    id: 3,
    name: "Cologne Sapphire Sea",
    brand: "Arabic",
    category: "fragrance",
    price: 20,
    weight: "100ml",
    img: "/img/f3.png",
    hoverImg: "/img/f33.png",
  },
  {
    id: 4,
    name: "Cologne Gripped Rose",
    brand: "Arabic",
    category: "fragrance",
    price: 32,
    weight: "80ml",
    img: "/img/f4.png",
    hoverImg: "/img/f44.png",
  },
  {
    id: 5,
    name: "Unisex Perfume",
    brand: "Arabic",
    category: "unisex",
    price: 32,
    weight: "80ml",
    img: "/img/u1.png",
    hoverImg: "/img/u11.png",
  },
  {
    id: 6,
    name: "Unisex Perfume",
    brand: "Arabic",
    category: "unisex",
    price: 32,
    weight: "80ml",
    img: "/img/u2.png",
    hoverImg: "/img/u22.png",
  },
  {
    id: 7,
    name: "Unisex Perfume",
    brand: "Arabic",
    category: "unisex",
    price: 32,
    weight: "80ml",
    img: "/img/u3.png",
    hoverImg: "/img/u33.png",
  },
  {
    id: 8,
    name: "Unisex Perfume",
    brand: "Arabic",
    category: "unisex",
    price: 32,
    weight: "80ml",
    img: "/img/u4.png",
    hoverImg: "/img/u44.png",
  },
  {
    id: 9,
    name: "Solid Perfume",
    brand: "Arabic",
    category: "solid",
    price: 32,
    weight: "80ml",
    img: "/img/s1.png",
    hoverImg: "/img/s11.png",
  },
  {
    id: 10,
    name: "Solid Perfume",
    brand: "Arabic",
    category: "solid",
    price: 32,
    weight: "80ml",
    img: "/img/s2.png",
    hoverImg: "/img/s22.png",
  },
  {
    id: 11,
    name: "Solid Perfume",
    brand: "Arabic",
    category: "solid",
    price: 32,
    weight: "80ml",
    img: "/img/s3.png",
    hoverImg: "/img/s33.png",
  },
  {
    id: 12,
    name: "Solid Perfume",
    brand: "Arabic",
    category: "solid",
    price: 32,
    weight: "80ml",
    img: "/img/s4.png",
    hoverImg: "/img/s44.png",
  },
];

const Hero5 = () => {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="hero5">

      <div className="hero5-header">

        <h2>
          Exploring the <br /> Versatility of Sprays
        </h2>

        <div className="hero5-buttons">

          <button onClick={() => setFilter("fragrance")}>
            Fragrances
          </button>

          <button onClick={() => setFilter("unisex")}>
            Unisex Perfume
          </button>

          <button onClick={() => setFilter("solid")}>
            Solid Perfume
          </button>

        </div>

      </div>

      <div className="scroll-btns">

        <button onClick={scrollLeft}>◀</button>
        <button onClick={scrollRight}>▶</button>

      </div>

      <div className="hero5-products" ref={scrollRef}>

        {filteredProducts.map((product) => (

          <div className="hero5-card" key={product.id}>

            <div className="hero5-img">

              <img src={product.img} className="main-img" alt="" />

              <img src={product.hoverImg} className="hover-img" alt="" />

            </div>

            <p className="brand">{product.brand}</p>

            <h3>{product.name}</h3>

            <div className="weight">
              Weight:
              <select>
                <option>{product.weight}</option>
              </select>
            </div>

            <div className="rating">★★★★★</div>

            <div className="price-row">

              <span>${product.price}</span>

              <button
                className="add-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Hero5;