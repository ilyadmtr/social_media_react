import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispachToProps = (dispatch) => {
    return {
        addPost: (postsInfo) => {
            dispatch(addPostActionCreator(postsInfo))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,
    mapDispachToProps)(
    MyPosts);

export default MyPostsContainer;
