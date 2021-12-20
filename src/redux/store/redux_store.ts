import {combineReducers, createStore} from "redux";
import dialogsReducer from "../reducers/dialogsReducer";
import profilesReducer from "../reducers/profileReducer";
import usersReducer from "../reducers/usersReducer";

let rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profiles: profilesReducer,
    users: usersReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

export type AppStoreType = typeof store;