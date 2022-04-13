import React  from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store/redux_store";
import {InitialStateDialogsType, addNewMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogs: InitialStateDialogsType
}

type MapDispatchToProps = {
    addMessageHandler: (newMessageText: string) => void
    onChangeNewMessageHandler: (value: string) => void
}

export type DialogsPropsTypeStDis = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return { 
        dialogs: state.dialogs,
     }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, { addMessageHandler: addNewMessageAC, onChangeNewMessageHandler: updateNewMessageAC }),
    withAuthRedirect,
)(Dialogs);

// export const DialogsContainer = connect(mapStateToProps, {
//     addMessageHandler: addNewMessageAC, onChangeNewMessageHandler: updateNewMessageAC
// })(withAuthRedirect(Dialogs));