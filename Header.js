import { LOGO_URL } from "../utils/constant"

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img alt="logo" src="" className="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;