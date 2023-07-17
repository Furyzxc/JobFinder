import {createAsyncThunk} from "@reduxjs/toolkit";
import {profileApi} from "../../api/profile-api.ts";
import {FollowRequestBody} from "../../types/api/profile-types.ts";
import {setIsFollowed, setStatusInfo, setUserInfo} from "./profile-slice.ts";

export const setUserProfile = createAsyncThunk('profile/setUserProfile',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getProfile.initiate(userId))
            .then(({data}) => data && dispatch(setUserInfo(data)))
    })


export const getUserStatus = createAsyncThunk('profile/getUserStatus',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getUserStatus.initiate(userId))
            .then(({data}) => data && dispatch(setStatusInfo(data)))
    })

export const setStatus = createAsyncThunk('profile/setStatus',
    async (status: string, {dispatch}) => {
        await dispatch(profileApi.endpoints.setStatus.initiate({status}))
    })

export const getIsFollowed = createAsyncThunk('profile/getIsFollowed',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getIsFollowed.initiate(userId)).then(({data}) => {
            data && dispatch(setIsFollowed(data))
        })
    })

export const toggleIsFollowed = createAsyncThunk('profile/toggleIsFollow',
    async ({userId, follow}: FollowRequestBody, {dispatch}) => {
        try {
            await dispatch(profileApi.endpoints.toggleIsFollowed.initiate({userId, follow}))
                // @ts-ignore
                .then(({data})=> {
                    data?.resultCode === 0 &&
                    dispatch(setIsFollowed(follow))
                })
        } catch (error) {
            console.log(error)
        }
    })