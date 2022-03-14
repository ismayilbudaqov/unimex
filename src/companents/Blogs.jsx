import React from "react";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";

function Blogs() {
  return (
    <div>
      <div className="blog-text">
        <h1>Our Blogs</h1>
        <span>
          Find a bright ideal to suit your taste with our great selection of
          suspension, wall, floor and table lights.
        </span>
      </div>
      <div className="blog-flex">
        <div className="blog1">
          <img src={blog1} alt="" />
          <h2>Shold you use a Shave Cream or Shave Gel?</h2>
          <span>LOOK,NEWS / August 26,2020</span>
          <div className="line"></div>
          <span>The firs thinf you to dp is sit down and set your goals.Diana...</span>
          <button>+ Read More</button>
        </div>
        <div className="blog2">
          <img src={blog2} alt="" />
          <h2>Easy Family Home Work Outs</h2>
          <span>FAMILY,FASHIONS,SALE,SUMMER / August 26,2020</span>
          <div className="line"></div>
          <span>The firs thinf you to dp is sit down and set your goals.Diana...</span>
          <button>+ Read More</button>
        </div>
        <div className="blog3">
          <img src={blog3} alt="" />
          <h2>4 Ways To A Button-Up Shirt</h2>
          <span>SALE,WEAR / August 26,2020</span>
          <div className="line"></div>
          <span>The firs thinf you to dp is sit down and set your goals.Diana...</span>
<button>+ Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
