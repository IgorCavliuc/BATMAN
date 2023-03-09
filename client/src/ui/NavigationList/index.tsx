import { NavigationItem } from "../index";
import "./stytle.scss";
import { useState, useEffect } from "react";
import { INavigationType } from "../../type";
const { getAllNavigate } = require("../../server/index");
// import HomeIco from '../img/home.svg'

// interface CurrentNavigation {
//   dataNavigation: INavigationType[];
// }

const NavigationList = () => {
  const [dataNavigation, setDataNavigation] = useState([]);

  useEffect(() => {
    getAllNavigate()
      //@ts-ignore
      .then((res) => setDataNavigation(res));
  }, []);
  return (
    <nav className="batman-store__header-container_navigation">
      <ul className="batman-store__header-container_navigation-list">
        {dataNavigation?.map((item:INavigationType, i) => {
          return <NavigationItem key={i} item={item} />;
        })}
      </ul>
    </nav>
  );
};

export default NavigationList;
