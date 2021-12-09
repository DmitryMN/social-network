import { InitialStateDialogsType, addNewMessageAC, dialogsReducer, updateNewMessageAC } from "./dialogsReducer";


test("correct add newMessage", () => {
    // data
    const initialState: InitialStateDialogsType = {
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

    const newMessage = "You are ready";
    // action
    let result = dialogsReducer(initialState, addNewMessageAC(newMessage));
    // expect
    expect(result.messages.length).toBe(5);
    expect(result.messages[4].message).toBe(newMessage);
});

test("correct update messageText", () => {
    // data
    const initialState: InitialStateDialogsType = {
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

    const newMessage = "Hi hi";
    // action
    let result = dialogsReducer(initialState, updateNewMessageAC(newMessage));
    // expect
    expect(result.newMessageText).toBe(newMessage);
});