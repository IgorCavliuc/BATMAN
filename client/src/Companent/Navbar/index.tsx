import "./style/index.scss";
import { NavigationList, NavigationProfile } from "../../ui";
// import HomeIco from "../../ui/img/home.svg";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
const SignInIco = require('../ico/key.svg').default



const NonProfile =()=>{
  return (
  <div className="batman-store__header-nonprofile"><Link to='/signin'>  SignIn <img src={SignInIco} alt='SignInIco'/> </Link></div>)
}


const Navbar = ({userState}:any) => {

  return (
    <div className="batman-store__header">
      <div className="batman-store__header-container">
        <div className="batman-store__header-container_logo">
          <NavLink to="/">
            <p>
              Batman <span>.</span>
            </p>
          </NavLink>
        </div>
        <NavigationList />
      </div>

{/*{sessionStorage.getItem('users') ?  <NavigationProfile data={userState?.user[0]}/> : <NonProfile/>}*/}

    </div>
  );
};
const mapStateToProps = (state: any) => ({
  userState: state?.userSlice,
});

export default connect(mapStateToProps)(Navbar);
