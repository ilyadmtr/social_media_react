import React from "react";
import s from "./FriendsSection.module.css"
import FriendItem from "./FriendItem/FriendItem";

const FriendsSection = (props) => {
    const friendsElement = props.state.map(el => (<FriendItem name={el.name}/>));
    return (
        <div className={s.friends_section}>
            <h3>Friends:</h3>
            <div className={s.friend_items}>
                {friendsElement}
            </div>
        </div>
    );
};

export default FriendsSection;
