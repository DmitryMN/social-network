import React from "react";
import Post from "./post/Post";
import "./profilePosts.css"

function ProfilePosts() {
    return(
        <div className="profile_posts">
            <h3>My posts</h3>
            <div className="profile_form_add_post">
                <textarea rows={2}> </textarea>
                <button>Add post</button>
            </div>
            <div className="posts_wrapper">
               <Post/>
            </div>
        </div>
    );
}

export default ProfilePosts;