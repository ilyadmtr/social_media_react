import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post_section}>
      <h2>My posts</h2>
      <div>New Post</div>
      <div className={s.posts}>
        <Post message="Hi. How are you?" likes="16" />
        <Post message="It`s my first post" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
