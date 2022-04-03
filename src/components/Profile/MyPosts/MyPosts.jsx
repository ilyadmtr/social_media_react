import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/formsControl";

let maxLength30 = maxLengthCreator(30);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <div><div><Field component={Textarea}  value={props.newPostText} name={"postsText"} validate={[requiredField, maxLength30]}/></div></div>
        <div><button>Add post</button></div>
    </form>
}

const MyPostsReduxForm = reduxForm({form: `addPostInfo`})(MyPostsForm)

const MyPosts = (props) => {
    const postsElement = props.posts.map(el => (<Post message={el.message} likes={el.likes} key={el.id} id={el.id}/>))
    let onSubmit = (data) => {
        let text = data.postsText;
        props.addPost(text);
    }

    return (
        <div className={s.post_section}>
            <h2>My posts</h2>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};



export default MyPosts;
