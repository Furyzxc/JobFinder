import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { profileApi } from "./profile-api.ts";
import { RootState } from "@/app/appStore.ts";
import { getUserData } from "./profile-thunks.ts";
import { authLogout } from "../auth";

interface Profile {
    isLoading: boolean
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
    isLoading: false,

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
            builder.addMatcher(isAnyOf(getUserData.pending, authLogout.pending), state => {
                state.isLoading = true
            })

            builder.addMatcher(isAnyOf(getUserData.fulfilled, authLogout.fulfilled), state => {
                state.isLoading = false
            })

            builder.addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload
                }
            })

            builder.addMatcher(profileApi.endpoints.getUserStatus.matchFulfilled, (state, action) => {
                state.status = action.payload
            })

            builder.addMatcher(profileApi.endpoints.setStatus.matchFulfilled, (state, action) => {
                // if success setting request status value

                if (action.payload.resultCode === 0) {
                    state.status = action.meta.arg.originalArgs.status
                }
            })

            builder.addMatcher(profileApi.endpoints.getIsFollowed.matchFulfilled, (state, action) => {
                state.isFollowed = action.payload
            })

            builder.addMatcher(profileApi.endpoints.toggleIsFollowed.matchFulfilled, (state, action) => {
                if (action.payload.resultCode === 0) {
                    state.isFollowed = !state.isFollowed
                }
            })

        }
    }
)

export const getProfile = (state: RootState) => state.profile