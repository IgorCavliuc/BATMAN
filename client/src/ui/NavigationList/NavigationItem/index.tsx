import "./stytle.scss";
import { useState } from "react";
import { INavigationType } from "../../../type";
import { NavLink } from "react-router-dom";

interface PropNavigation {
  item: INavigationType;
}

const NavigationItem = ({ item }: PropNavigation) => {
  const { code, img, value } = item;

  const [state, setState] = useState("");

  return (
    <li>
      {img ? <img src={img} alt="HomeIco" /> : null}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "batman-store__header-container_navigation-list-item--active"
            : "batman-store__header-container_navigation-list-item"
        }
        to={`/${code ? code : null}`}
      >
        {value}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
