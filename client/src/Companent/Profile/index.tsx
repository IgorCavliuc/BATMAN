import {useEffect} from "react";
import {getUser} from "../../server";
import {getAllUser} from "../../Redux/User/userSlice";
import {connect} from "react-redux";


const Profile =({getAllUser, user}:any)=>{


useEffect(()=>{
    if(!user) {
        const user = JSON.parse(sessionStorage.getItem("users") || '')[0]
        getUser(user?.login, user?.password).then(res => getAllUser(res));
    }
}, [getAllUser, user])

    return(
        <div>
            Profile
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state?.userSlice,
});

export default connect(mapStateToProps, {getAllUser})(Profile)