import { instance } from "./api.ts";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId).then(res => res.data)
    }
}