import {api, instance} from "./api.ts";
import {
    FollowRequestBody,
    ProfileResponseBody,
    RequestStatusBody,
    StatusCode,
    ToggleFollowResponse
} from "../types/api-types.ts";

export const profileAPI1 = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId).then(res => res.data)
    },

    getUserStatus(userId: number) {
        return instance.get('profile/status/' + userId).then(res => res.data)
    },

    setStatus(status: string | null) {
        return instance.put('profile/status', {status}).then(res => res.data)
    }
}

export const profileApi = api.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<ProfileResponseBody, number>({
            query: (userId) => 'profile/' + userId
        }),

        getUserStatus: build.query<string, number>({
            query: (userId) => 'profile/status/' + userId
        }),

        setStatus: build.mutation<StatusCode, RequestStatusBody>({
            query: (body) => ({
                url: 'profile/status',
                method: 'put',
                body
            })
        }),

        getIsFollowed: build.query<boolean, number>({
            query: (userId) => 'follow/' + userId
        }),

        toggleIsFollowed: build.mutation<ToggleFollowResponse, FollowRequestBody>({
            query: ({userId, follow}) => ({
                url: 'follow/' + userId,
                method: follow ? 'post' : 'delete'
            })
        })
    })
})