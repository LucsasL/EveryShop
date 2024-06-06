// Importing Hooks
import { useState, useContext } from "react";

// Components Data
import navMenuChanger from "./nav";

// React Icons
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

// Header Component
const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [themeColor, setThemeColor] = useState("#fff");

  const navStateChange = useContext(navMenuChanger);  

  const lateralNav = () => {
    navStateChange("0");
  }

  const changeTheme = () => {
    setDarkTheme(!darkTheme);

    if (darkTheme) {
      setThemeColor("#151515");
      return;
    }

    setThemeColor("#fff");
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
            <label 
              htmlFor="themeInp" 
              className="toggleBody"
              style={{ background: themeColor }}
            >
              <input 
                type="checkbox" 
                name="theme" 
                id="themeInp" 
                value={darkTheme}
                onChange={() => changeTheme()}
              />
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
    </>
  );
}

export default Header;