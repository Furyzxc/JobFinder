import { baseApi } from '@/shared/api/baseApi.ts'
import {
	FollowRequestBody,
	ProfileResponseBody,
	SetStatusRequestBody,
	StartChattingResponse,
	StatusCode,
	ToggleFollowResponse,
} from './types.ts'

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		getProfile: build.query<ProfileResponseBody, number>({
			query: userId => 'profile/' + userId,
		}),

		getUserStatus: build.query<string, number>({
			query: userId => 'profile/status/' + userId,
		}),

		setStatus: build.mutation<StatusCode, string>({
			query: status => ({
				url: 'profile/status',
				method: 'put',
				body: {
					status,
				} as SetStatusRequestBody,
			}),
		}),

		getIsFollowed: build.query<boolean, number>({
			query: userId => 'follow/' + userId,
		}),

		toggleIsFollowed: build.mutation<ToggleFollowResponse, FollowRequestBody>({
			query: ({ userId, follow }) => ({
				url: 'follow/' + userId,
				method: follow ? 'post' : 'delete',
			}),
		}),

		// Start dialog with a person
		startChatting: build.mutation<StartChattingResponse, number>({
			query: userId => ({
				url: 'dialogs/' + userId,
				method: 'put',
			}),
			invalidatesTags: ['DIALOGS'],
		}),
	}),
})

export const {
	useGetProfileQuery,
	useGetIsFollowedQuery,
	useToggleIsFollowedMutation,
	useGetUserStatusQuery,
	useSetStatusMutation,
	useStartChattingMutation,
} = api
