import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import "./profilePosts.css";
import {ProfilePropsTypeStDis} from "./ProfilePostsContainer";


class ProfilePosts extends React.Component<ProfilePropsTypeStDis> {

    constructor(props: ProfilePropsTypeStDis) {
        super(props);
    }

    onAddPostHandler = () => {
        this.props.onAddPostHandler(this.props.profiles.newText);
    }

    onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.props.onChangePostHandler(e.currentTarget.value);
    }

    render() {
        return(
            <div className="profile_posts">
                <h3>My posts</h3>
                <div className="profile_form_add_post">
                    <textarea rows={2} value={this.props.profiles.newText} onChange={this.onChangePostHandler}> </textarea>
                    <button onClick={this.onAddPostHandler}>Add post</button>
                </div>
                <div className="posts_wrapper">
                    {
                        this.props.profiles.posts.map(post => <Post id={post.id} postText={post.postText} likesCount={post.likesCount}/>)
                    }
                </div>
            </div>
        );
    }
}

export default ProfilePosts;