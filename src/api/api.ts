import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'a8d9924c-0a09-4a81-9c01-6763abfe8005'
    }
});

export const socialNetworkApi = {
    getUsers(pageSize: number, currentPage: number) {
        debugger;
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        });
    },
    getPage(pageSize: number, pageNumber: number) {
        return instance.get(`users/?count=${pageSize}&page=${pageNumber}`).then(response => {
            return response.data;
        });
    }

}