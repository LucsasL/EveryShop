// Importing Hooks
import { useState } from "react";

import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState("-30%");

  const lateralNav = () => {
    setMenuOpen("0");
  }

  return (
    <>
      <header>
        <div>
          <div className="logo">
            <button onClick={() => lateralNav()}>menu</button>

            <h1>EveryShop</h1>
          </div>

          <div className="inpDiv">
            <input
              type="text"
              className="searchInput"
              placeholder="Enter your search shoes"
              onChange={(e) => e}
            />
            <a href="http://">
              <FiHeart className="nav-icons" />
            </a>
            <a href="https://">
              <AiOutlineShoppingCart className="nav-icons" />
            </a>
            <a href="https://">
              <AiOutlineUserAdd className="nav-icons" />
            </a>
          </div>

          <div className="configDiv">
            <label htmlFor="themeInp" className="toggleBody">
              <input type="checkbox" name="theme" id="themeInp" />
              <span>
                <i className="thumb"></i>
              </span>
            </label>

            <select name="languageSel" id="langSel">
              <option value="English">English</option>
              <option value="Português">Português</option>
            </select>
          </div>
        </div>
      </header>

      <nav style={{ left: menuOpen }}>
        <div>
          <ul>
            <li>
              <a href="https://">Shoes</a>
            </li>
            <li>
              <a href="https://">Shoes</a>
            </li>
            <li>
              <a href="https://">Shoes</a>
            </li>
            <li>
              <a href="https://">Shoes</a>
            </li>
            <li>
              <a href="https://">Shoes</a>
            </li>
          </ul>
        </div>

        <div className="closeBtn" onClick={() => setMenuOpen("-30%")}>
          X
        </div>
      </nav>
    </>
  );
}

export default Header;