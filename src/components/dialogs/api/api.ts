import { baseApi } from '@/shared/api/baseApi.ts'
import { apiTagTypes } from '@/shared/constants'
import {
	DialogsResponse,
	MessagesRequest,
	MessagesResponse,
	SendMessageRequest,
	SendMessageResponse,
} from './types.ts'

const { DIALOGS, MESSAGES } = apiTagTypes

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		// get list of dialogs with your friend
		requestDialogs: build.query<DialogsResponse[], void>({
			query: () => 'dialogs',
			providesTags: () => [DIALOGS],
		}),

		// get list of messages with your friend, max count is 20
		requestMessages: build.query<MessagesResponse, MessagesRequest>({
			query: ({ id, count = 20 }) =>
				'dialogs/' + id + `/messages?count=${count}`,
			providesTags: () => [MESSAGES],
		}),

		//send message to your friend

		sendMessage: build.mutation<SendMessageResponse, SendMessageRequest>({
			query: ({ userId, body }) => ({
				url: 'dialogs/' + userId + '/messages',
				method: 'post',
				body: { body },
			}),
			invalidatesTags: [MESSAGES],
		}),
	}),
})

export const {
	useRequestDialogsQuery,
	useRequestMessagesQuery,
	useSendMessageMutation,
} = api
