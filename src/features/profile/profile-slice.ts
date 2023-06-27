import defaultAvatar from '../../assets/defaultAvatar.jpg'

import { createSlice } from "@reduxjs/toolkit";

interface Profile {
    image: string,
    userInfo: {
        name: string,
        birthDate: string,
        city: string,
        education: string,
        url: string
    }
}

const initialState: Profile = {
    image: defaultAvatar,
    userInfo: {
        name: 'Сергей Ананьев',
        birthDate: '10 of December 2006',
        city: 'Odessa',
        education: 'Secondary',
        url: 'youtube.com'
    }
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})