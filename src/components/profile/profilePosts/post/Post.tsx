import React from "react";
import userImg from "../../../../images/user_img.png"
import "./post.css";
import {PostType} from "../../../../redux/state";


function Post(props: PostType) {
    return(
        <div key={props.id} className="post">
            <img className="imageUser" src={userImg} alt="MyImage"/>
            <p>{props.id}: {props.postText}</p>
            <p>like: {props.likesCount}</p>
        </div>
    );
}

export default Post;