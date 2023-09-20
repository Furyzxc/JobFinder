import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MessageResponseType } from '@/components/dialogs'

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

export type MessageType =
	| PendingMessage
	| ({
			pending: boolean
	  } & MessageResponseType)

interface Chat {
	profile: Profile
	messages: MessageType[]
}

type MESSAGE_ID = number

const initialState: Chat = {
	profile: {
		name: null,
		avatar: null,
		userId: null,
	},
	messages: [],
}

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChatProfile(state, action: PayloadAction<Profile>) {
			state.profile = action.payload
		},

		setMessages(state, action: PayloadAction<typeof state.messages>) {
			state.messages = action.payload
		},

		addMessage(state, action: PayloadAction<MessageType>) {
			state.messages.push(action.payload)
		},

		removeMessage(state, action: PayloadAction<MESSAGE_ID>) {
			const index = state.messages.findIndex((mes) => mes.id === action.payload)

			state.messages.splice(index, 1)
		},

		removePending(state, action: PayloadAction<MESSAGE_ID>) {
			state.messages = state.messages.map((message) => {
				if (message.id === action.payload) {
					return {
						...message,
						pending: false,
					}
				}

				return message
			})
		},
	},
})

export const chatActions = chatSlice.actions
