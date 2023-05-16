import "./stytle.scss";
import { useState } from "react";
import { INavigationType } from "../../../type";
import { NavLink } from "react-router-dom";

interface PropNavigation {
  item: INavigationType;
}

const NavigationItem = ({ item }: PropNavigation) => {
  const { code, img, value } = item;


  return (
    <NavLink
    className={({ isActive }) =>
      isActive
        ? "batman-store__header-container_navigation-list-item--active"
        : "batman-store__header-container_navigation-list-item"
    }
    to={`/${code ? code : ''}`}
  >
    <li>
      <div className="batman-store__header-container_navigation-list-item-img">
      {img ? <img src={img} alt="HomeIco" /> : null}
      </div>
        {value}

      
    </li>
    </NavLink>
  );
};

export default NavigationItem;
