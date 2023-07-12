import { api } from "./api.ts";
import {
    FollowRequestBody,
    ProfileResponseBody,
    SetStatusRequestBody,
    StatusCode,
    ToggleFollowResponse
} from "../types/api/profile-types.ts";


export const profileApi = api.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<ProfileResponseBody, number>({
            query: (userId) => 'profile/' + userId
        }),

        getUserStatus: build.query<string, number>({
            query: (userId) => 'profile/status/' + userId
        }),

        setStatus: build.mutation<StatusCode, SetStatusRequestBody>({
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