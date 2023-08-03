import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { profileApi } from "./profile-api.ts";
import { RootState } from "@/app/appStore.ts";

interface Profile {
    isLoading: boolean

    name: string | null,
    avatar: string | null
}

const initialState: Profile = {
    isLoading: false,
    name: null,
    avatar: null
}

export const profileSlice = createSlice({
        name: 'profile',
        initialState,
        reducers: {
            setProfileName(state, action: PayloadAction<string>) {
                state.name = action.payload
            },

            setAvatar(state, action: PayloadAction<string | null>) {
                state.avatar = action.payload
            }
        },

        extraReducers: builder => {
            const { getProfile, getIsFollowed, getUserStatus } = profileApi.endpoints

            builder.addMatcher(isAnyOf(getProfile.matchPending, getIsFollowed.matchPending, getUserStatus.matchPending), state => {
                state.isLoading = true
            })

            builder.addMatcher(isAnyOf(getProfile.matchFulfilled, getIsFollowed.matchFulfilled, getUserStatus.matchFulfilled), state => {
                state.isLoading = false
            })
        }
    }
)

export const {
    setProfileName,
    setAvatar
} = profileSlice.actions

export const selectProfileLoading = (state: RootState) => state.profile.isLoading
export const selectProfileName = (state: RootState) => state.profile.name
export const selectProfileAvatar = (state: RootState) => state.profile.avatar