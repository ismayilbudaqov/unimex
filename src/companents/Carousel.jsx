import React from "react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };
  
  return (
      
    <div  className="mainpage"> 
      <Slider {...settings}>
<div className="Cimageo">
        <div className="flex">

         <div className="aura">
<h1>A U R A</h1>
<div className="price">
  <span>FROM</span>
    <h3>$103.99</h3>
</div>
<button>Sop The Collection</button>
         </div>
        </div>
        </div>
        <div className="Cimaget">
        <div className="flex">

<div className="aura">
<h1>C H O A T O</h1>
<div className="price">
<span>FROM</span>
<h3>$650.00</h3>
</div>
<button>Sop The Collection</button>
</div>
</div>
        </div>

      </Slider>
    </div>
  );
}
