import React from "react";
import { ProfileUserNullType } from "../ProfileUserContainer";
import Preloader from "../../preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";


export const UserProfile = ({profiles, status}: ProfileUserNullType) => {
    if(!profiles) {
        return <Preloader />
    }
    return (
        <div className="user_profile">
            <div className="logo">
            </div>
            <ProfileStatus status={status} />
            <div>Full Name: {profiles.fullName}</div>
            <div>About me: {profiles.aboutMe ? profiles.aboutMe : "is empty"}</div>
        </div>
    );
}
