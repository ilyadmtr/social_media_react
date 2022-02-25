import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div className={s.wallpaper}>
                <img src="https://venipak.lv/wp-content/uploads/venipak-business-img-1000x300.jpg"/>
            </div>
            <div className={s.wrapper_logo_desc}>
                <div className={s.logo}>
                    <img
                        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-holiday-xnimrodx-lineal-color-xnimrodx.png"/>
                </div>
                <div className={s.description}>
                    <div>Ilya Dmytrenko</div>
                    <div>Date of Birth: 24 December</div>
                    <div>Education: college IaM</div>
                    <div>Link: https://www.instagram.com/ilyadmytrenko/</div>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
