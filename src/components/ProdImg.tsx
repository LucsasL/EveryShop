import React from 'react'

// Data Import
import data from '../db/data';

function ProdImg() {
  return (
    <>
      <div className="prodInfo">
        <div className="prodImg">
          <div className="mainImg">
            <picture>
              <source media="(min-width: )" srcSet="" />
              <figure>
                <img src={data[0].img} alt="BRUH" />
                <figcaption>{}</figcaption>
              </figure>
            </picture>
          </div>

          <div className="nextImgs">
            <picture>
              <source media="(min-width: )" srcSet="" />
              <figure>
                <img src={data[0].img} alt="BRUH" />
                <figcaption>{}</figcaption>
              </figure>
            </picture>
            
            <picture>
              <source media="(min-width: )" srcSet="" />
              <figure>
                <img src={data[0].img} alt="BRUH" />
                <figcaption>{}</figcaption>
              </figure>
            </picture>
            
            <picture>
              <source media="(min-width: )" srcSet="" />
              <figure>
                <img src={data[0].img} alt="BRUH" />
                <figcaption>{}</figcaption>
              </figure>
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdImg;