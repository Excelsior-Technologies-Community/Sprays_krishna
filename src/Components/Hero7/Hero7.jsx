import React, { useRef } from "react";
import "./Hero7.css";

const products = [
{
id:1,
name:"Valaya Eau De Parfum",
brand:"Swiss",
price:"$20.00",
oldPrice:null,
weight:"60ml",
img:"/img/f1.png",
hoverImg:"/img/f11.png"
},
{
id:2,
name:"Oriana Eau De Parfum",
brand:"Swiss",
price:"$20.00",
oldPrice:"$25.00",
weight:"90ml",
img:"/img/f2.png",
hoverImg:"/img/f22.png"
},
{
id:3,
name:"Carlisle Eau De Parfum",
brand:"Arabic",
price:"$25.00",
oldPrice:null,
weight:"100ml",
img:"/img/f3.png",
hoverImg:"/img/f33.png"
}
];

const Hero7 = () => {

const sliderRef = useRef(null);

const scrollLeft = () => {
sliderRef.current.scrollBy({
left:-320,
behavior:"smooth"
});
};

const scrollRight = () => {
sliderRef.current.scrollBy({
left:320,
behavior:"smooth"
});
};

return (

<section className="hero7">

<div className="hero7-container">

{/* LEFT SIDE */}

<div className="hero7-left">

<h2>Unique perfumes for women and men</h2>

<p>
The applications of sprays span a wide spectrum,
catering to industrial, artistic, medicinal,
and everyday needs.
</p>

<div className="hero7-buttons">
<button className="btn-outline">Unisex</button>
<button className="btn-outline">Men</button>
</div>

<button className="btn-dark">
Get More Products →
</button>

</div>


{/* RIGHT SIDE */}

<div className="hero7-right">

<button className="arrow left" onClick={scrollLeft}>❮</button>

<div className="slider" ref={sliderRef}>

{products.map((p)=>(
<div className="product-card" key={p.id}>

<div className="img-box">

<img src={p.img} className="main-img" />

<img src={p.hoverImg} className="hover-img" />

</div>

<div className="product-info">

<span className="brand">{p.brand}</span>

<h4>{p.name}</h4>

<div className="weight">
Weight: {p.weight}
</div>

<div className="rating">
★★★★★
</div>

<div className="price-box">

<span className="price">{p.price}</span>

{p.oldPrice && (
<span className="old-price">{p.oldPrice}</span>
)}

</div>

<button className="cart-btn">
Add To Cart
</button>

</div>

</div>
))}

</div>

<button className="arrow right" onClick={scrollRight}>❯</button>

</div>

</div>

</section>

);
};

export default Hero7;