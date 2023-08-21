import { baseApi } from '@/shared/api/baseApi.ts'
import { TransformType } from '@/components/profile'

export type EditProfileRequest = Omit<TransformType, 'photos'>

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		editProfileInfo: build.mutation<EditProfileResponse, EditProfileRequest>({
			query: body => ({
				url: '/profile',
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['PROFILE'],
		}),

		editProfileStatus: build.mutation<EditProfileResponse, string>({
			query: status => ({
				url: '/profile/status',
				method: 'PUT',
				body: {
					status,
				},
			}),
		}),
	}),
})

export const { useEditProfileInfoMutation } = api
