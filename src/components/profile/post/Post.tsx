import React from "react";
import "./post.css"


function Post() {
    return(
        <div className="post_wrapper">
            <h3>My posts</h3>
            <div className="wrap_addfield">
                <textarea rows={2}></textarea>
                <button>Add post</button>
            </div>
            <div>It's my first post</div>
            <div>Post about the car</div>
            <div>My little post about wheels</div>
            <div>Engines cars</div>
        </div>
    );
}

export default Post;