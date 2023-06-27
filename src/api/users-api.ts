import { instance } from "./api.ts";

export const usersAPI = {
    getUsers (pageLength = 10, pageNumber = 1) {
        return instance.get(`users?count=${pageLength}&page=${pageNumber}`).then(res => res.data)
    },

    followUser (userId: number) {
        return instance.post('follow/' + userId).then(res => res.data)
    },


    unfollowUser (userId: number) {
        return instance.delete('follow/' + userId).then(res => res.data)
    }
}