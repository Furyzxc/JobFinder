import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/users-api.ts";
import { profileAPI } from "../../api/profile-api.ts";
import { toggleIsFetching } from "../auth";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const toggleFollowingProgress = (state, payload: boolean) => { state.isFollowingProgress = payload }

export const setUserProfile = createAsyncThunk('profile/setFriendProfile',
    async (userId: number, thunkAPI) => {
        const profile = await profileAPI.getProfile(userId)

        thunkAPI.dispatch(setProfile(profile))
    })

export const follow = createAsyncThunk('profile/follow',
    async (userId: number, thunkAPI) => {
        const data = await usersAPI.followUser(userId)

        if (data.resultCode === 0) {
            thunkAPI.dispatch(followFriend())
        }
    }
)

export const unfollow = createAsyncThunk('profile/unfollow',
    async (userId: number, thunkAPI) => {
        const data = await usersAPI.unfollowUser(userId)

        if (data.resultCode === 0) {
            thunkAPI.dispatch(unfollowFriend())
        }
    }
)

interface Profile {
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

const initialState: Profile = {
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


export const profileSlice = createSlice({
        name: 'friendProfile',
        initialState,
        reducers: {
            setProfile(state, action: PayloadAction<Profile>) {
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
            builder.addCase(setUserProfile.pending,
                (state) => { toggleIsFetching(state,true)})

            builder.addCase(setUserProfile.fulfilled,
                (state) => { toggleIsFetching(state,false) })

            builder.addCase(follow.pending,
                (state) => { toggleFollowingProgress(state, true)})

            builder.addCase(follow.fulfilled,
                (state) => { toggleFollowingProgress(state, false) })

            builder.addCase(unfollow.pending,
                (state) => { toggleFollowingProgress(state, true)})

            builder.addCase(unfollow.fulfilled,
                (state) => { toggleFollowingProgress(state, false)})
        }
    }
)

export const {
    setProfile,
    followFriend,
    unfollowFriend
} = profileSlice.actions


