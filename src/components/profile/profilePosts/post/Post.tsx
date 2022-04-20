import React from "react";
import userImg from "../../../../images/user_img.png"
import "./post.css";
import {PostType} from "../../../../redux/reducers/profileReducer";


class Post extends React.Component<PostType> {

    render() {
        return(
            <div key={this.props.id} className="post">
                <img className="imageUser" src={userImg} alt="MyImage"/>
                <p>{this.props.id}: {this.props.postText}</p>
                <p>like: {this.props.likesCount}</p>
            </div>
        );
    }
}

export default Post;