import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Profile {
	name: string | null
	avatar: string | null
	userId: number | null
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
