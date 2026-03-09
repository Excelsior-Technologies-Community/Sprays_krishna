import React, { useRef } from "react";
import "./Hero6.css";

const Hero6 = () => {

const sliderRef = useRef(null);

const scrollLeft = () => {
  sliderRef.current.scrollBy({ left: -280, behavior: "smooth" });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({ left: 280, behavior: "smooth" });
};

return (
<section className="hero6">

<div className="hero6-container">

{/* BIG CARD */}

<div
className="big-card"
style={{
backgroundImage:
"url(https://sprays-workdo.myshopify.com/cdn/shop/files/card-img-1.png?v=17001337740)"
}}
>

<div className="card-content">
<h3>Unisex</h3>
<p>
On an everyday level, household products
 such as air fresheners, cleaners, and
  personal care items often utilize spray
</p>
<button>check More Products</button>
</div>

</div>

{/* RIGHT SIDE SLIDER */}

<div className="right-slider">

<button className="arrow left" onClick={scrollLeft}>❮</button>

<div className="slider" ref={sliderRef}>

<div
className="small-card"
style={{
backgroundImage:
"url(https://sprays-workdo.myshopify.com/cdn/shop/files/card-img-2.png?v=1700133773)"
}}
>
<div className="card-content">
<h3>Solid Perfume</h3>
<p>Oral sprays are used for localized medication
  delivery or to facilitate swallowing in individuals
   with difficulties consuming pills or liquids..</p>
<button>Get More Products</button>
</div>
</div>

<div
className="small-card"
style={{
backgroundImage:
"url(https://sprays-workdo.myshopify.com/cdn/shop/files/card-img-2.png?v=1700133773)"
}}
>
<div className="card-content">
<h3>Men</h3>
<p>In agriculture, sprays are used to apply
     fertilizers, pesticides, and herbicides to 
    crops, ensuring higher yields and healthier plants.</p>
<button> Get More Products</button>
</div>
</div>

<div
className="small-card"
style={{
backgroundImage:
"url(https://sprays-workdo.myshopify.com/cdn/shop/files/card-img-3.png?v=1700133773)"
}}
>
<div className="card-content">
<h3>Tradding</h3>
<p>Additionally, in the manufacturing sector, 
    sprays are integral to cooling systems,
     lubrication processes, and the production
      of various products.</p>
<button>Get More Products</button>
</div>
</div>

</div>

<button className="arrow right" onClick={scrollRight}>❯</button>

</div>

</div>

</section>
);

};

export default Hero6;