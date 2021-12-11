import {combineReducers, createStore} from "redux";
import dialogsReducer from "../reducers/dialogsReducer";
import profilesReducer from "../reducers/profileReducer";

let rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profiles: profilesReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

export type AppStoreType = typeof store;