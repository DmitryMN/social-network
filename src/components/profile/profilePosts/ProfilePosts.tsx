import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import "./profilePosts.css";
import {ProfilePropsTypeStDis} from "./ProfilePostsContainer";


const ProfilePosts = (props: ProfilePropsTypeStDis) => {

    const onAddPostHandler = () => {
        props.onAddPostHandler(props.profiles.newText);
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePostHandler(e.currentTarget.value);
    }

    return(
        <div className="profile_posts">
            <h3>My posts</h3>
            <div className="profile_form_add_post">
                <textarea rows={2} value={props.profiles.newText} onChange={onChangePostHandler}> </textarea>
                <button onClick={onAddPostHandler}>Add post</button>
            </div>
            <div className="posts_wrapper">
                {
                    props.profiles.posts.map(post => <Post id={post.id} postText={post.postText} likesCount={post.likesCount}/>)
                }
            </div>
        </div>
    );
}

export default ProfilePosts;