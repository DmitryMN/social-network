import React from "react";
import { ProfileUserNullType } from "../ProfileUserContainer";
import Preloader from "../../preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileUserType } from "../../../redux/reducers/profileReducer";



type UserProfilePropsType = {
    profiles: ProfileUserType | null
    status: string
    updateStatusThunk: (status: string) => void
}


export const UserProfile = (props: UserProfilePropsType) => {
    if(!props.profiles) {
        return <Preloader />
    }
    return (
        <div className="user_profile">
            <div className="logo">
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatusThunk}/>
            <div>Full Name: {props.profiles.fullName}</div>
            <div>About me: {props.profiles.aboutMe ? props.profiles.aboutMe : "is empty"}</div>
        </div>
    );
}
