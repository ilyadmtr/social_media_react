import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user-female-circle.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.wallpaper}>
                <img src="https://venipak.lv/wp-content/uploads/venipak-business-img-1000x300.jpg"/>
            </div>
            <div className={s.wrapper_logo_desc}>
                <div className={s.logo}>
                    <img src={props.profile.photos.small || userPhoto}/>
                </div>
                <div className={s.description}>
                    <div>{props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div>Work: {props.profile.lookingForAJobDescription}</div>
                    <div>Link: https://www.instagram.com/ilyadmytrenko/</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
