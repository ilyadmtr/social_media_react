import React from "react";
import s from "./FriendItem.module.css";

const FriendItem = (props) => {
    return (
        <div className={s.friend_item}>
            <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-holiday-xnimrodx-lineal-color-xnimrodx.png"/>
            <div className={s.name}>{props.name}</div>
        </div>
    );
};

export default FriendItem;
