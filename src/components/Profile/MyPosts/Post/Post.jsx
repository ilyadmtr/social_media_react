import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.avatar_name}>
        <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-holiday-xnimrodx-lineal-color-xnimrodx.png" />
        <div>{props.message}</div>
      </div>
      <span>{props.likes} likes</span>
    </div>
  );
};

export default Post;
