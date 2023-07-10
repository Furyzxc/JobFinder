import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../api/profile-api.ts";


interface Profile {
    isFollowed: boolean

    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string

    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

    photos: {
        small: string | null
        large: string | null
    }

    status: null | string
}

const initialState: Profile = {
    isFollowed: false,

    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: '',

    contacts: {
        github: null,
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null
    },

    photos: {
        small: null,
        large: null
    },

    status: null
}


export const profileSlice = createSlice({
        name: 'profile',
        initialState,
        reducers: {},

        extraReducers: builder => {
            builder.addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => ({
                    ...state,
                    ...action.payload
                })
            )

            builder.addMatcher(profileApi.endpoints.getUserStatus.matchFulfilled, (state, action) => {
                state.status = action.payload
            })

            builder.addMatcher(profileApi.endpoints.getIsFollowed.matchFulfilled, (state, action) => {
                state.isFollowed = action.payload
            })

            builder.addMatcher(profileApi.endpoints.toggleIsFollowed.matchFulfilled, (state, action) => {
                if (action.payload.resultCode === 0) state.isFollowed = !state.isFollowed
            })
        }
    }
)


