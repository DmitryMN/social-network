import React from "react";
import {UsersType} from "../../../redux/reducers/usersReducer";
import "./user.css";
import userImg from "../../../images/user_img.png";
import {NavLink} from "react-router-dom";

type MapDispatchToPropsType1 = {
    onChangeFollowUnfollow: (id: number) => void
}

type UserPropsType = UsersType & MapDispatchToPropsType1;

const User = (props: UserPropsType) => {

    const followUnfollowHandler = (id: number) => {
        props.onChangeFollowUnfollow(id);
    }

    return (
        <div className="user_wrap_element">
            <div className="user_wrap_profile_icon_button">
                <div className="user_wrap_image">
                    <NavLink to={"/profile/" + props.id}>
                        <img className="image" src={userImg} alt="img"/>
                    </NavLink>
                </div>
                <div className="users_wrap_button">
                    <button className="button"
                            onClick={() => followUnfollowHandler(props.id)}>{props.followed ? "Follow" : "Unfollow"}</button>
                </div>
            </div>
            <div className="user_wrap_profile">
                <div className="user_wrap_profile_name_status">
                    <div className="user_name">{props.name}</div>
                    <div className="user_status">{props.status}</div>
                </div>
                <div className="user_wrap_profile_country_city">
                    <div className="user_country">{"Belarus"}</div>
                    <div className="user_city">{"Minsk"}</div>
                </div>
            </div>
        </div>
    );
}

export default User;