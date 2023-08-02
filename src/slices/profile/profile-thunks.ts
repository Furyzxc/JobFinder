import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileApi } from "./profile-api.ts";
import { batch } from "react-redux";
import { FollowRequestBody } from "@/shared/types/api/profile-types.ts";

export const getUserData = createAsyncThunk('profile/getUserData',
    async (id: number, {dispatch}) => {
        batch(() => {
            dispatch(requestProfileData(id));
            dispatch(getUserStatus(id));
            dispatch(getIsFollowed(id));
        })
    })

export const requestProfileData = createAsyncThunk('profile/setUserProfile',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getProfile.initiate(userId))
    })


export const getUserStatus = createAsyncThunk('profile/getUserStatus',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getUserStatus.initiate(userId))
    })

export const setStatus = createAsyncThunk('profile/setStatus',
    async (status: string, {dispatch}) => {
        await dispatch(profileApi.endpoints.setStatus.initiate({status}))
    })

export const getIsFollowed = createAsyncThunk('profile/getIsFollowed',
    async (userId: number, {dispatch}) => {
        await dispatch(profileApi.endpoints.getIsFollowed.initiate(userId))
    })

export const toggleIsFollowed = createAsyncThunk('profile/toggleIsFollow',
    async ({userId, follow}: FollowRequestBody, {dispatch}) => {
        await dispatch(profileApi.endpoints.toggleIsFollowed.initiate({userId, follow}))
    })