import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
    'API-KEY': '94594b53-7cb0-4c6c-8225-7904aed28415'
    }
})

export const userAPI = {
    getUsers(currentPage=1, pageSize=5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    postFollow(id){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).
            then(response => response.data)
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+userId).
            then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId).
            then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).
            then(response => response.data);
    }
}