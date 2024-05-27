import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <input
            type="text"
            className="searchInput"
            placeholder="Enter your search shoes"
            onChange={(e) => (e)}
          />

          <FiHeart className="nav-icons" />

          <AiOutlineShoppingCart className="nav-icons" />

          <AiOutlineUserAdd className="nav-icons" />
        </div>
      </header>
    </>
  );
}

export default Header;