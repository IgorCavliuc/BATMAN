// import AvatarIco from '../img/avatar 1.svg'
// import ArrowIco from '../img/small-right.svg'
import { Link } from "react-router-dom";
import "./style/index.scss";

interface NavigationProfileType{
  data:any
}



const NavigationProfile = ({data}:NavigationProfileType) => {
  return (
    <div className="batman-store__header-profile">
      <div className="batman-store__header-profile-img">
      <img src={data?.img} alt="AvatarIco"/>
      </div>
      <div className="batman-store__header-profile_name-status">
        <p className="batman-store__header-profile_name">{data?.lastname} {data?.name}</p>
        <p className="batman-store__header-profile_status">{data?.root} account</p>
      </div>
      {/*<img src={ArrowIco} alt="ArrowIco"/>*/}
    </div>
  );
};

export default NavigationProfile;
