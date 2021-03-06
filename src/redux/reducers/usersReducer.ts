import { Dispatch } from "redux";
import { usersApi } from "../../api/api";

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
    followingInProgres: Array<number>
}

export type arrUsersType = Array<UsersType>;

export type ActionUsersType = ReturnType<typeof followUnfolllowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> 
| ReturnType<typeof setIsFetchingAC> | ReturnType<typeof followingInProgresAC>;

const initialState: InitialStateType= {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgres: [],
}

const usersReducer = (state: InitialStateType = initialState, action: ActionUsersType): InitialStateType => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: [...action.users]};
        case "FOLLOW_UNFOLLOW":
            return {...state, users: state.users.map(user => {
                    return user.id === action.id ? {...user, followed: action.follow} : user;
                })};
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage};
        case "SET_IS_FETCHING":
            return {...state, isFetching: !state.isFetching};
        case "TOGGLE_FOLLOWING_PROGRESS":
            return {...state, followingInProgres: action.isFetch ? 
                [...state.followingInProgres, action.userId] 
                : state.followingInProgres.filter(id => id !== action.userId)}    
        default:
            return state;
    }
}

export const followUnfolllowAC = (id: number, follow: boolean) => {
    return {type: "FOLLOW_UNFOLLOW", id, follow} as const;
}

export const setUsersAC = (users: arrUsersType) => {
    return {type: "SET_USERS", users} as const;
}

export const setCurrentPageAC = (currentPage: number) => {
    return  {type: "SET_CURRENT_PAGE", currentPage} as const;
}

export const setIsFetchingAC = () => {
    return {type: "SET_IS_FETCHING"} as const;
}

export const followingInProgresAC = (userId: number, isFetch: boolean, ) => {
    return {type: "TOGGLE_FOLLOWING_PROGRESS", userId, isFetch} as const;
}

export const setUsersThunk = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC());
        usersApi.getUsers(pageSize, currentPage).then(data => {
            dispatch(setIsFetchingAC());
            dispatch(setUsersAC(data.items));
        });
    }
}

export const followThunk = (id: number, follow: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgresAC(id, true));
        usersApi.follow(id).then(data => {
            if(data.resultCode === 0) {
                dispatch(followUnfolllowAC(id, follow));
                dispatch(followingInProgresAC(id, false));
            }
        });
    }
}

export const unfollowThunk = (id: number, follow: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgresAC(id, true));
        usersApi.unfollow(id).then(data => {
            if(data.resultCode === 0) {
                dispatch(followUnfolllowAC(id, follow));
                dispatch(followingInProgresAC(id, false));
            }
        });
    }
}


export default usersReducer;