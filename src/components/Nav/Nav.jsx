import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendsSection from "./FriendsSection/FriendsSection";


const Nav = (props) => {

    return (
        <div className={s.back_wrapper}>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink :''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => isActive ? s.activeLink :''}>Messages</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/news" className={({isActive}) => isActive ? s.activeLink :''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? s.activeLink :''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive ? s.activeLink :''}>Find users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? s.activeLink :''}>Settings</NavLink>
            </div>
        </nav>
            {/*<FriendsSection state={props.state.names}/>*/}
        </div>
    );
};

export default Nav;
