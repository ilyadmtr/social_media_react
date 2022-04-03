import s from "./Preloader.module.css"
import preloader from "../../../assets/images/loading.svg";
import React from "react";

let Preloader = () =>{
    return <div className={s.preloader_back}>
        <img src={preloader} className={s.preloader}/>
    </div>
}

export default Preloader;