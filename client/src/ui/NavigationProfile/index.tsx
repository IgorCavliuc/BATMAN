// import AvatarIco from '../img/avatar 1.svg'
// import ArrowIco from '../img/small-right.svg'
import "./style/index.scss";
const NavigationProfile = () => {
  return (
    <div className="batman-store__header-profile">
      {/*<img src={AvatarIco} alt="AvatarIco"/>*/}
      <div className="batman-store__header-profile_name-status">
        {" "}
        <p className="batman-store__header-profile_name">Toda D</p>
        <p className="batman-store__header-profile_status">Premium account</p>
      </div>
      {/*<img src={ArrowIco} alt="ArrowIco"/>*/}
    </div>
  );
};

export default NavigationProfile;
