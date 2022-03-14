import React from "react";
import parfume2 from "../images/parfume2.jpg";
import  {FaHeart} from "react-icons/fa"

import {useSelector,useDispatch} from "react-redux"

function Watchs() {
  const allData = useSelector(state =>state.productsReducer) 
  const dispatch = useDispatch()
const handleAddBasket = (data) =>{
  dispatch({type:"ADD_BUCKET", payload:data})
}
  return (

    <div className="displayf">
<div className="wtext">
    <h1>Trending This Week</h1>
    <span>Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights.</span>
</div>

    <div className="imageInnFlex">

      {
        allData && allData.splice(0,4).map((index,key) =>(


<div key={key}class="imageBox">
        <div class="imageInn">
            <div className="heart"> <FaHeart/></div>
          <img src={index.image} />
          <div className="prices">
            <h2>{index.name}</h2>
            <div className="price-flex">
            <p>$</p>
            <span>{index.price}</span>

            </div>
          </div>
        </div>
        <div class="hoverImg">
        <button onClick={() => handleAddBasket(index)}>Add to Card</button>
        </div>
      </div>

        ))
      }
      
      
    </div>
    </div>
  );
}

export default Watchs;
