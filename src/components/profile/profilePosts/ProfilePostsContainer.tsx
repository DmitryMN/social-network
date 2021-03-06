import React from "react";
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {rootReducerType} from "../../../redux/store/redux_store";
import {InitialStateProfileType, addPostAC, updateNewTextAC} from "../../../redux/reducers/profileReducer";

type MapDispatchToPropsType = {
    onAddPostHandler: (postText: string) => void
    onChangePostHandler: (value: string) => void
}

type MapStateToPropsType = {
    profiles: InitialStateProfileType
}

export type ProfilePropsTypeStDis = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return  { profiles: state.profiles }
}

export const ProfilePostContainer = connect(mapStateToProps, {
    onAddPostHandler: addPostAC, onChangePostHandler: updateNewTextAC
})(ProfilePosts)