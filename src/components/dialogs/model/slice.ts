import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Profile {
	name: string | null
	avatar: string | null
	userId: number | null
}

export type PendingMessage = {
	pending: boolean
	body: string
	viewed: boolean
	addedAt: string
	senderId: 0
	id: number
}

interface Chat {
	profile: Profile
}

const initialState: Chat = {
	profile: {
		name: null,
		avatar: null,
		userId: null,
	},
}

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChatProfile(state, action: PayloadAction<Profile>) {
			state.profile = action.payload
		},
	},
})

export const chatActions = chatSlice.actions
