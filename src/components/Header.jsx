// Importing Hooks
import { useState, useContext } from "react";

// Components Data
import navMenuChanger from "./nav";

// React Icons
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

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
            <button onClick={() => lateralNav()}>
              <IoMenu />
            </button>

            <h1>EveryShop</h1>
          </div>

          <div className="inpDiv">
            <input
              type="text"
              className="searchInput"
              placeholder="Enter your search shoes"
              onChange={(e) => e}
            />
            <button href="http://">
              <FiHeart className="nav-icons" />
            </button>
            <button href="https://">
              <AiOutlineShoppingCart className="nav-icons" />
            </button>
            <button href="https://">
              <AiOutlineUserAdd className="nav-icons" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;