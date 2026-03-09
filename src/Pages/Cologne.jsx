import React, { useState } from "react";
import "./Cologne.css";
import Navbar from "../Components/Navbar/Navbar";

const Cologne = () => {

const images = [
"/img/c1.png",
"/img/c2.png",
"/img/c3.png",
"/img/c4.png"
];

const [mainImg,setMainImg] = useState(images[0]);
const [qty,setQty] = useState(1);

return (
<>
<Navbar/>

<div className="cologne">

<div className="cologne-container">

{/* LEFT SIDE */}

<div className="cologne-left">

<div className="thumb-images">

{images.map((img,index)=>(
<img
key={index}
src={img}
alt=""
onMouseEnter={()=>setMainImg(img)}
/>
))}

</div>

<div className="main-image">
<img src={mainImg} alt="product"/>
</div>

</div>

{/* RIGHT SIDE */}

<div className="cologne-right">

<h1>Cologne Arabic Air</h1>

<p>
Cologne Arabic Air is a citrus-scented cologne with notes of mandarin,
bergamot and neroli. Its long-lasting formula ensures a pleasant scent
for hours.
</p>

<div className="timer">
67 : 13 : 46 : 12
</div>

<div className="price">
<span className="new">$20.00</span>
<span className="old">$25.00</span>
</div>

<div className="quantity">

<span>Quantity</span>

<div className="qty-box">

<button onClick={()=>setQty(qty>1?qty-1:1)}>-</button>

<input value={qty} readOnly/>

<button onClick={()=>setQty(qty+1)}>+</button>

</div>

</div>

<div className="weight">
Weight: 100ml
</div>

<div className="btns">

<button className="cart">
Add to Cart →
</button>

<button className="buy">
Buy it now
</button>

</div>

</div>

</div>

</div>

{/* Recently Viewed Products */}

<div className="recent">

<h2>Recently Viewed Products</h2>

<div className="recent-grid">

<div className="product-card">
<img src="/img/p1.png" alt="" />
<h4>Althair Eau De Parfum</h4>
<div className="price">
<span className="new">$20.00</span>
<span className="old">$25.00</span>
</div>
</div>

<div className="product-card">
<img src="/img/p2.png" alt="" />
<h4>Herod Eau De Parfum</h4>
<div className="price">
<span className="new">$10.00</span>
</div>
</div>

<div className="product-card">
<img src="/img/p3.png" alt="" />
<h4>Delina Eau De Parfum</h4>
<div className="price">
<span className="new">$20.00</span>
<span className="old">$25.00</span>
</div>
</div>

<div className="product-card">
<img src="/img/p4.png" alt="" />
<h4>Cassili Eau De Parfum</h4>
<div className="price">
<span className="new">$20.00</span>
<span className="old">$30.00</span>
</div>
</div>

</div>

</div>


{/* Spray Section */}

<div className="spray-section">

<div className="spray-container">

<div className="spray-left">

<span className="spray-small">Sprays</span>

<h2>Stellar Explorations</h2>

<p>
A space-themed setting is a vast expanse that beckons with its cosmic
mysteries and celestial wonders. It encapsulates the boundless universe,
featuring celestial bodies, interstellar phenomena, and the enigmatic
depths of the cosmos.
</p>

<button className="spray-btn">See More</button>

</div>

<div className="spray-right">

<img src="/img/cp.png" alt="spray"/>

</div>

</div>

</div>


{/* CUSTOMER REVIEWS */}

<div className="reviews">

<h2 className="review-title">Customer Reviews</h2>

<div className="review-header">

<div>
<div className="stars">★★★★★</div>
<p>Be the first to write a review</p>
</div>

<button className="review-btn">Write a review</button>

</div>


<div className="review-slider">

<button className="arrow left"
onClick={()=>document.querySelector('.review-container').scrollBy({left:-400,behavior:'smooth'})}>
❮
</button>


<div className="review-container">

<div className="review-card">

<img src="/img/p1.png" alt=""/>

<div>
<h3>Great Customer Support</h3>
<p>
Agriculture benefits significantly from sprays, employing
them for the controlled distribution of pesticides.
</p>
<b>John Doe, client</b>
</div>

</div>


<div className="review-card">

<img src="/img/p2.png" alt=""/>

<div>
<h3>Excellent!</h3>
<p>
From cooling systems in industrial machinery to lubrication
processes and product creation.
</p>
<b>Isabel Hanson</b>
</div>

</div>


<div className="review-card">

<img src="/img/p3.png" alt=""/>

<div>
<h3>Amazing Quality</h3>
<p>
The fragrance lasts long and gives a premium feeling.
Highly recommended.
</p>
<b>Michael Lee</b>
</div>

</div>


<div className="review-card">

<img src="/img/p4.png" alt=""/>

<div>
<h3>Love the Fragrance</h3>
<p>
A beautiful scent that feels luxurious and elegant.
Perfect for events.
</p>
<b>Sarah Wilson</b>
</div>

</div>

</div>


<button className="arrow right"
onClick={()=>document.querySelector('.review-container').scrollBy({left:400,behavior:'smooth'})}>
❯
</button>

</div>

</div>

</>
);
};

export default Cologne;