import {type} from "os";


export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
}

export type InitialStateType = {
    users: arrUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type arrUsersType = Array<UsersType>;

export type ActionUsersType = ReturnType<typeof followUnfolllowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>;

const initialState: InitialStateType= {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: InitialStateType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: [...action.users]};
        case "FOLLOW_UNFOLLOW":
            return {...state, users: state.users.map(user => {
                    return user.id === action.id ? {...user, followed: !user.followed} : user;
                })};
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage};
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

export const setCurrentPageAC = (currentPage: number) => {
    return  {type: "SET_CURRENT_PAGE", currentPage: currentPage} as const;
}

export default usersReducer;