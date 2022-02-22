import {combineReducers, createStore} from "redux";
import dialogsReducer from "../reducers/dialogsReducer";
import profilesReducer from "../reducers/profileReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";

let rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profiles: profilesReducer,
    users: usersReducer,
    auth: authReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

export type AppStoreType = typeof store;