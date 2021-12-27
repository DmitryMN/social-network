

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: arrUsersType
}

export type arrUsersType = Array<UsersType>;

export type ActionUsersType = ReturnType<typeof followUnfolllowAC> | ReturnType<typeof setUsersAC>;

const initialState: InitialStateType= {
    users: [
    ]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: [...action.users]};
        case "FOLLOW_UNFOLLOW":
            return {...state, users: state.users.map(user => {
                    return user.id === action.id ? {...user, followed: !user.followed} : user;
                })};
        default:
            return state;
    }
}

export const followUnfolllowAC = (id: number) => {
    return {type: "FOLLOW_UNFOLLOW", id: id} as const;
}

export const setUsersAC = (users: arrUsersType) => {
    return {type: "SET_USERS", users: users} as const;
}

export default usersReducer;