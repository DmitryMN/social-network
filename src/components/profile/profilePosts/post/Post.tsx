import React from "react";
import userImg from "../../../../images/user_img.png"
import "./post.css";


function Post() {
    return(
        <div className="post">
            <img className="imageUser" src={userImg} alt="MyImage"/>
            <p>It's my first post</p>
            <span>like</span>
        </div>
    );
}

export default Post;