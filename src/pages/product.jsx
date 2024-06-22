import { useContext } from "react";

// 
import { productSelected } from "../App";

function Product() {
  const { img, title, prevPrice, newPrice } = useContext(productSelected);

  return (
    <>
      <main>
        <div>
          <section className="prodSect">
            <div>
              <h1>
                {title}
              </h1>
              <div className="prodInfo">
                <div className="prodImg">
                  <picture>
                    <source media="(min-width: )" srcSet="" />
                    <figure>
                      <img src={img} alt="BRUH" />
                      <figcaption>{}</figcaption>
                    </figure>
                  </picture>
                </div>
                <div className="divDesc">
                  {
                    (prevPrice) (newPrice)
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Product;
