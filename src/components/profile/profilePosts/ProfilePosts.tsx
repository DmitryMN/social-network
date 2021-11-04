import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import "./profilePosts.css";
import {profilesPropsType} from "../../../redux/state";

function ProfilePosts(props: profilesPropsType) {

    const onAddPostHandler = () => {
        props.addPost(props.newPost);
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostText(e.currentTarget.value);
    }

    return(
        <div className="profile_posts">
            <h3>My posts</h3>
            <div className="profile_form_add_post">
                <textarea rows={2} value={props.newPost} onChange={onChangePostHandler}> </textarea>
                <button onClick={onAddPostHandler}>Add post</button>
            </div>
            <div className="posts_wrapper">
                {
                    props.posts.map(post => <Post id={post.id} post={post.post} likesCount={post.likesCount}/>)
                }
            </div>
        </div>
    );
}

export default ProfilePosts;