

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
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
        {id: 1, followed: true, fullName: "Dmitrii", status: "I am a developer", location: {city: "Moscow", country: "Russia"}},
        {id: 2, followed: true, fullName: "Alex", status: "I am a doctor", location: {city: "Minsk", country: "Belarus"}},
        {id: 3, followed: false, fullName: "Boris", status: "I am a manager", location: {city: "Kiev", country: "Ukraine"}},
        {id: 4, followed: false, fullName: "Masha", status: "I am a student", location: {city: "Moscow", country: "Russia"}},
    ]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case "FOLLOW_UNFOLLOW":
            return {...state, users: state.users.map(user => {
                    return user.id === action.id ? {...user, followed: !user.followed} : user;
                })};
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
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