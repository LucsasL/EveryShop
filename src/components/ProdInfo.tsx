import React from 'react';

// Data Import
import data from '../db/data';

function ProdInfo() {
  return (
    <>
      <div className="prodDesc">
        <div className="basicInfo">
          <p>
            <span className="stars">
              {data[0].star}
              {data[0].star}
              {data[0].star}
              {data[0].star}
              {data[0].star}
              {"  "}
            </span>
            {data[0].reviews}
          </p>

          <span className="prevPrice">
            <del>{data[0].prevPrice}</del>
          </span>

          <h2 className="newPrice">
            ${data[0].newPrice}
            <span className="cents">.99</span>
          </h2>
        </div>

        <div className="btns">
          <button>BUY NOW</button>
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default ProdInfo;