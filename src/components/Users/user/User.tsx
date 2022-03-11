import React from "react";
import {UsersType} from "../../../redux/reducers/usersReducer";
import "./user.css";
import userImg from "../../../images/user_img.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../../api/api";

type MapDispatchToPropsType1 = {
    onChangeFollowUnfollow: (id: number, follow: boolean) => void
}

type UserPropsType = UsersType & MapDispatchToPropsType1;

type ResponseDataType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

const User = (props: UserPropsType) => {

    const followHandler = (id: number) => {
        usersApi.follow(id).then(data => {
            if(data.resultCode === 0) {
                props.onChangeFollowUnfollow(id, true);
            }
        });
    }

    const unfollowHandler = (id: number) => {
        usersApi.unfollow(id).then(data => {
            if(data.resultCode === 0) {
                props.onChangeFollowUnfollow(id, false);
            }
        });        
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
                    {
                        props.followed ? <button className="button"
                        onClick={() => unfollowHandler(props.id)}>Unfollow</button> :
                        <button className="button"
                        onClick={() => followHandler(props.id)}>Follow</button>
                    }
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