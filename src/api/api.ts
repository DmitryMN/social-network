import axios from "axios";
import {ProfileUserType} from "../redux/reducers/profileReducer";
import {arrUsersType} from "../redux/reducers/usersReducer";

type AuthDataType = {
    id: number
    login: string
    email: string
}

type AuthMeType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: AuthDataType
}

type GeneralRequestResultType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

type GetUsersType = {
    items: arrUsersType
    totalCount: number
    error: string
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'a8d9924c-0a09-4a81-9c01-6763abfe8005'
    }
});


export const usersApi = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get<GetUsersType>(`users/?count=${pageSize}&page=${currentPage}`).then(response => response.data);
    },
    follow(id: number) {
        return instance.post<GeneralRequestResultType>(`follow/${id}`).then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete<GeneralRequestResultType>(`follow/${id}`).then(response => response.data);
    }
}


export const profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileUserType>(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<GeneralRequestResultType>(`profile/status/`, {status: status}).then(response => response.data);
    },
}
export const authApi = {
    authMe() {
        return instance.get<AuthMeType>(`auth/me`).then(response => response.data);
    }
}