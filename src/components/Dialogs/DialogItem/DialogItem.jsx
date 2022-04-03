import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog_item + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>
            <div className={s.wrapper_dialogs}>
                <div className={s.icon}><img src = "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-holiday-xnimrodx-lineal-color-xnimrodx.png"/></div>
                <div className={s.name}>{props.name}</div>
            </div>
        </NavLink>
    </div>;
}

export default DialogItem;