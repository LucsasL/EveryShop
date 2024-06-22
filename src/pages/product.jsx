// import { useContext } from "react";

//
// import { productSelected } from "../App";

// Data Import
import data from "../db/data";

// Components Import
import ProdInfo from "../components/ProdInfo.tsx";
import ProdImg from "../components/ProdImg.tsx";

function Product() {
  // const { img, title, prevPrice, newPrice } = useContext(productSelected);

  return (
    <>
      <main>
        <div>
          <section className="prodSect">
            <div>
              <h1>
                {data[0].title}
              </h1>

              <p>
                By {data[0].company}
              </p>

              <ProdImg />

              <ProdInfo />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Product;
