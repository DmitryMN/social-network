import React from "react";
import {UsersType} from "../../../redux/reducers/usersReducer";
import "./user.css";
import userImg from "../../../images/user_img.png";

type MapDispatchToPropsType1 = {
    onChangeFollowUnfollow: (id: number) => void
}

type UserPropsType = UsersType & MapDispatchToPropsType1;

const User = (props: UserPropsType) => {
    console.log("render component user");
    const followUnfollowHandler = (id: number) => {
        props.onChangeFollowUnfollow(id);
    }

    return(
        <div className="user_wrap_element">
            <div className="user_wrap_profile_icon_button">
                <div className="user_wrap_image">
                    <img className="image" src={userImg} alt="img"/>
                </div>
                <div className="users_wrap_button">
                    <button className="button" onClick={() => followUnfollowHandler(props.id)}>{props.followed ? "Follow" : "Unfollow"}</button>
                </div>
            </div>
            <div className="user_wrap_profile">
                <div className="user_wrap_profile_name_status">
                    <div className="user_name">{props.name}</div>
                    <div className="user_status">{props.status}</div>
                </div>
                <div className="user_wrap_profile_country_city">
                    <div className="user_country">{props.location.country}</div>
                    <div className="user_city">{props.location.city}</div>
                </div>
            </div>
        </div>
    );
}

export default User;