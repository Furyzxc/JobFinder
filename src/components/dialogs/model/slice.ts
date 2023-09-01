import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Chat {
	name?: string
	avatar?: string | null
}

const initialState: Chat = {
	name: undefined,
	avatar: null,
}

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChatInfo(state, action: PayloadAction<Chat>) {
			return {
				...state,
				...action.payload,
			}
		},
	},
})

export const chatActions = chatSlice.actions
