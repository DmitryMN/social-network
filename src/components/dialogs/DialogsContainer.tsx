import React  from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store/redux_store";
import {InitialStateDialogsType, addNewMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogsReducer";

type MapStateToPropsType = {
    dialogs: InitialStateDialogsType
    isAuth: boolean
}

type MapDispatchToProps = {
    addMessageHandler: (newMessageText: string) => void
    onChangeNewMessageHandler: (value: string) => void
}

export type DialogsPropsTypeStDis = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return { 
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth,
     }
}


export const DialogsContainer = connect(mapStateToProps, {
    addMessageHandler: addNewMessageAC, onChangeNewMessageHandler: updateNewMessageAC
})(Dialogs);