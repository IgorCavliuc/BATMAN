import {useEffect} from "react";
import {getSession, getUser} from "../../server";
import {getAllUser} from "../../Redux/User/userSlice";
import {connect} from "react-redux";


const Profile =({getAllUser, user}:any)=>{
useEffect(()=>{
    getSession().then(res => console.log(res))
},[])

useEffect(()=>{
    if(sessionStorage.getItem('users')) {
            const user = JSON.parse(sessionStorage.getItem("users") || '[]')
            getUser(user?.login, user?.password).then(res => getAllUser(res));
    }else{
        window.location.pathname = '/signin'
    }
}, [getAllUser,sessionStorage, user])

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