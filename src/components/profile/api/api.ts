import { baseApi } from '@/shared/api/baseApi.ts'
import { apiTagTypes } from '@/shared/constants'
import { transformProfileRes } from './transformProfileRes.ts'
import {
	FollowRequestBody,
	ProfileResponseBody,
	ToggleFollowResponse,
	TransformType,
} from './types.ts'

const { FOLLOW, PROFILE } = apiTagTypes

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<ProfileResponseBody, number>({
			query: (userId) => 'profile/' + userId,
			transformResponse: (res: TransformType) => transformProfileRes(res),
			providesTags: () => [PROFILE],
		}),

		getIsFollowed: build.query<boolean, number>({
			query: (userId) => 'follow/' + userId,
			providesTags: () => [FOLLOW],
		}),

		toggleIsFollowed: build.mutation<ToggleFollowResponse, FollowRequestBody>({
			query: ({ userId, follow }) => ({
				url: 'follow/' + userId,
				// true = follow, false = unfollow
				method: follow ? 'post' : 'delete',
			}),
			invalidatesTags: [FOLLOW],
		}),
	}),
})

export const {
	useGetProfileQuery,
	useGetIsFollowedQuery,
	useToggleIsFollowedMutation,
} = api
