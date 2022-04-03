import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-female-circle.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";
import {follow, toggleFollowingInProgress, unfollow} from "../../redux/users-reducer";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount /
        props.pageSize);

    let pages = [];
    for (let i = 1;
         i <=
         pagesCount;
         i++) {
        pages.push(i);
        if(i > 18){
            break;
        }
    }
    return (<div>
        {props.users.map(u => <div key={u.id} className={s.item}>
            <div className={s.flex_wrapper}>
                <div className={s.avatar_wrapper}>
                    <div className={s.avatar}>
                        <NavLink to={'/profile/'+ u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.follow_btn}>
                        {!u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                    </div>
                </div>
                <div className={s.info_wrapper}>
                    <div className={s.fullName}>{u.name}</div>
                    <div className={s.status}>{u.status}</div>
                </div>
            </div>
            <div className={s.location_wrapper}>
                <div className={s.country}>Украина</div>
                <div className={s.city}>Киев</div>
            </div>
        </div>)}
        <div className={s.pages_wrapper}>
            {pages.map(p => {
                return (<span key={p} onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p ? s.selectedPage : s.pagesItem }>{p}</span>)
            })}
        </div>
    </div>)
}

export default Users;