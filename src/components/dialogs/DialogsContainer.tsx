import React  from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store/redux_store";
import {InitialStateDialogsType, addNewMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogsReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogs: InitialStateDialogsType
}

type MapDispatchToProps = {
    addMessageHandler: (newMessageText: string) => void
    onChangeNewMessageHandler: (value: string) => void
}

export type DialogsPropsTypeStDis = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return { dialogs: state.dialogs }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps  => {
    return {
        addMessageHandler: (newMessageText: string) => {
            dispatch(addNewMessageAC(newMessageText));
        },
        onChangeNewMessageHandler: (value: string) => {
            dispatch(updateNewMessageAC(value));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addMessageHandler: addNewMessageAC, onChangeNewMessageHandler: updateNewMessageAC
})(Dialogs);