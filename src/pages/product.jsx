// import { useContext } from "react";

function Product() {
  // const { prodTitle, prodImg, prodText, prodPrice } = useContext();

  return (
    <>
      <section className="prodSect">
        <div>
          <h1>
            {}
          </h1>

          <div className="prodInfo">
            <div className="prodImg">
              <picture>
                <source media="(min-width: )" srcset="" />
                <figure>
                  <img src="" alt="" />
                  <figcaption>{}</figcaption>
                </figure>
              </picture>
            </div>

            <div className="divDesc"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
