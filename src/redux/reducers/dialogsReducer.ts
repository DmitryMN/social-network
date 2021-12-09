import {MessageType} from "../state";

export type UserTypeA = {
    id: number
    user: string
}

export type MessageTypeA = {
    id: number
    message: string
}

export type InitialStateDialogsType = {
    users: Array<UserTypeA>
    messages: Array<MessageTypeA>
    newMessageText: string
}

export type ActionsDialogsType = ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageAC>

let initialState: InitialStateDialogsType = {
    users: [
        {id: 1, user: 'Max Volkov'},
        {id: 2, user: 'Alex Brown'},
        {id: 3, user: 'Ann Kolinz'},
        {id: 4, user: 'Kriss Nollan'}
    ],
    messages: [
        {id: 1, message: 'Hello, how are you'},
        {id: 2, message: 'I am fine'},
        {id: 3, message: 'Are you sleeping?'},
        {id: 4, message: 'Yes it is'}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: InitialStateDialogsType, action: ActionsDialogsType) => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE":
            const newMessage: MessageTypeA = {
                id: 5,
                message: action.newText
            }
            return {...state, messages: [...state.messages, newMessage]};
        case "UPDATE_NEW_MESSAGE":
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}

export const addNewMessageAC = (text: string) => {
    return {type: "ADD_NEW_MESSAGE", newText: text} as const;
};

export const updateNewMessageAC = (text: string) => {
    return {type: "UPDATE_NEW_MESSAGE", newText: text} as const;
};

export default dialogsReducer;