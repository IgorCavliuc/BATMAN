import "./style/index.scss";
import { NavigationList, NavigationProfile } from "../../ui";
import HomeIco from "../../ui/img/home.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="batman-store__header">
      <div className="batman-store__header-container">
        <div className="batman-store__header-container_logo">
          <NavLink to="/">
            {" "}
            <p>
              Batman <span>.</span>
            </p>
          </NavLink>
        </div>
        <NavigationList />
      </div>
      <NavigationProfile />
    </div>
  );
};

export default Navbar;
