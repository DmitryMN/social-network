import React from "react";
import Post from "./post/Post";
import "./profilePosts.css";
import {ProfilesType} from "../../../redux/state";

function ProfilePosts(props: ProfilesType) {
    return(
        <div className="profile_posts">
            <h3>My posts</h3>
            <div className="profile_form_add_post">
                <textarea rows={2}> </textarea>
                <button>Add post</button>
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