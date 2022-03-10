import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'a8d9924c-0a09-4a81-9c01-6763abfe8005'
    }
});

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

export const usersApi = {
    getUsers(pageSize: number, currentPage: number) {
        debugger;
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        });
    },
    // getPage(pageSize: number, pageNumber: number) {
    //     return instance.get(`users/?count=${pageSize}&page=${pageNumber}`).then(response => {
    //         return response.data;
    //     });
    // }

}

export const authApi = {
    authMe() {
        return instance.get<AuthMeType>(`auth/me`).then(response => response.data);
    },
};