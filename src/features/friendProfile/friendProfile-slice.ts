import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/users-api.ts";
import { profileAPI } from "../../api/profile-api.ts";

export const setFriendProfile = createAsyncThunk('friendProfile/setFriendProfile',
    async (userId: number, thunkAPI) => {
        const profile = await profileAPI.getProfile(userId)

        thunkAPI.dispatch(setProfile(profile))
    })

export const follow = createAsyncThunk('friendProfile/follow',
    async (userId: number, thunkAPI) => {
        const data = await usersAPI.followUser(userId)

        if (data.resultCode === 0) {
            thunkAPI.dispatch(followFriend())
        }
    }
)

export const unfollow = createAsyncThunk('friendProfile/unfollow',
    async (userId: number, thunkAPI) => {
        const data = await usersAPI.unfollowUser(userId)

        if (data.resultCode === 0) {
            thunkAPI.dispatch(unfollowFriend())
        }
    }
)

interface FriendProfile {
    isFetching: boolean
    isFollowed: boolean
    isFollowingProgress: boolean

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
}

const initialState: FriendProfile = {
    isFetching: false,
    isFollowed: false,
    isFollowingProgress: false,

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
    }
}


export const friendProfileSlice = createSlice({
        name: 'friendProfile',
        initialState,
        reducers: {
            setProfile(state, action: PayloadAction<FriendProfile>) {
                return {
                    ...state,
                    ...action.payload
                }
            },

            followFriend(state) {
                state.isFollowed = true
            },

            unfollowFriend(state) {
                state.isFollowed = false
            },
        },

        extraReducers: builder => {
            builder.addCase(setFriendProfile.pending, (state) => {
                state.isFetching = true
            })

            builder.addCase(setFriendProfile.fulfilled, (state) => {
                state.isFetching = false
            })

            builder.addCase(follow.pending, (state) => {
                state.isFollowingProgress = true
            })

            builder.addCase(follow.fulfilled, (state) => {
                state.isFollowingProgress = false
            })

            builder.addCase(unfollow.pending, (state) => {
                state.isFollowingProgress = true
            })

            builder.addCase(unfollow.fulfilled, (state) => {
                state.isFollowingProgress = false
            })
        }
    }
)

export const {
    setProfile,
    followFriend,
    unfollowFriend
} = friendProfileSlice.actions


