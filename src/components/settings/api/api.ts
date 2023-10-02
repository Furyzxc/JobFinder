import { baseApi } from '@/shared/api/baseApi.ts'
import { apiTagTypes } from '@/shared/constants'
import { TransformType } from '@/components/profile'
import { EditProfilePhotoResponse, EditProfileResponse } from './types.ts'

export type EditProfileRequest = Omit<TransformType, 'photos'>

const { PROFILE } = apiTagTypes

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		editProfileInfo: build.mutation<EditProfileResponse, EditProfileRequest>({
			query: (body) => ({
				url: 'profile',
				method: 'PUT',
				body,
			}),
			invalidatesTags: [PROFILE],
		}),

		editProfileStatus: build.mutation<EditProfileResponse, string>({
			query: (status) => ({
				url: 'profile/status',
				method: 'PUT',
				body: {
					status,
				},
			}),
		}),
		editProfilePhoto: build.mutation<EditProfilePhotoResponse, FormData>({
			query: (formDataWithImage) => ({
				url: 'profile/photo',
				method: 'PUT',
				body: formDataWithImage,
				prepareHeaders: (headers: Headers) => {
					headers.set('Content-Type', 'multipart/form-data')
					return headers
				},
			}),
			invalidatesTags: [PROFILE],
		}),
	}),
})

export const { useEditProfileInfoMutation, useEditProfilePhotoMutation } = api
