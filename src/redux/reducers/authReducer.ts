export type InitialStateAuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type ActionsAuthType = ReturnType<typeof setAuthUserData>

const InitialState: InitialStateAuthType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state: InitialStateAuthType = InitialState, action: ActionsAuthType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return { ...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => {
    return { type: "SET_AUTH_USER_DATA", data: {id, login, email } } as const;
};

export default authReducer;