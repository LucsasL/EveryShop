// Hooks Import
import { useState, createContext } from "react";

// Context
const navMenuChanger = createContext();

function Nav() {
  const [menuOpen, setMenuOpen] = useState("-30%");

  return (
    <>
      <navMenuChanger.Provider value={setMenuOpen}>
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
      </navMenuChanger.Provider>
    </>
  );
}

export default Nav;