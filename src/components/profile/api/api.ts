import { baseApi } from '@/shared/api/baseApi.ts'
import { transformProfileRes } from './transformProfileRes.ts'
import {
	FollowRequestBody,
	ProfileResponseBody,
	SetStatusRequestBody,
	StatusCode,
	ToggleFollowResponse,
	TransformType,
} from './types.ts'

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		getProfile: build.query<ProfileResponseBody, number>({
			query: userId => 'profile/' + userId,
			transformResponse: (res: TransformType) => transformProfileRes(res),
			providesTags: () => ['PROFILE'],
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
			providesTags: () => ['FOLLOW'],
		}),

		toggleIsFollowed: build.mutation<ToggleFollowResponse, FollowRequestBody>({
			query: ({ userId, follow }) => ({
				url: 'follow/' + userId,
				// true = follow, false = unfollow
				method: follow ? 'post' : 'delete',
			}),
			invalidatesTags: ['FOLLOW'],
		}),
	}),
})

export const {
	useGetProfileQuery,
	useGetIsFollowedQuery,
	useToggleIsFollowedMutation,
} = api
