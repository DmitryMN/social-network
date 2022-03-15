import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "../reducers/dialogsReducer";
import profilesReducer from "../reducers/profileReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profiles: profilesReducer,
    users: usersReducer,
    auth: authReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStoreType = typeof store;