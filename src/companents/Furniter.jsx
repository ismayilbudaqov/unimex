import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function Furniter() {
  const allData = useSelector((state) => state.productsReducer);
  const basket = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();

  const handleAddBasket = (data) => {
    let currentData = basket.filter((index) => index.id == data.id);

    if (currentData.length > 0) {
      currentData[0].quantity =+ 1;
    } else {
      dispatch({ type: "ADD_BUCKET", payload: data });
    }
  };
  return (
    <div className="chair-flex">
      <div className="Lchairarea">
        <div className="all">
          <h1>All</h1>
          <span>15 products</span>
        </div>
      </div>

      <div className="mainproducts">
        {allData &&
          allData.slice(5,9).map((index, key) => (
            <div key={key} class="imageBox">
              <div class="imageInn">
                <div className="heart">
                  {" "}
                  <FaHeart />
                </div>
                <img src={index.image} />
                <div className="prices">
                  <h2>{index.name}</h2>
                  <span> $ {index.price}</span>
                </div>
              </div>
              <div class="hoverImg">
                <button onClick={() => handleAddBasket(index)}>
                  Add to Card
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Furniter;
