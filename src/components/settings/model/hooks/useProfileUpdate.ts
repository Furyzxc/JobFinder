import {
	EditProfileRequest,
	useEditProfileInfoMutation,
} from '../../api/api.ts'
import { useOwnerInfo } from './useOwnerInfo.ts'
import { useProfileSettings } from './useProfileSettings.ts'

type Output = [
	// function that call update
	trigger: () => void,
	data: {
		isLoading: boolean
		isError: boolean
		data: EditProfileResponse | undefined
	},
]

export const useProfileUpdate = (): Output => {
	const {
		name,
		bio,
		isLookingForJob,
		jobDescription,
		socialAccounts: { telegram: mainLink, linkedin: vk, ...socialAccounts },
	} = useProfileSettings()
	const { info } = useOwnerInfo()

	const createEditProfileBody = (
		fullName: string,
		userId: number,
		aboutMe: string,
		lookingForAJob: boolean,
		lookingForAJobDescription: string | null
	): EditProfileRequest => {
		return {
			fullName,
			userId,
			aboutMe,
			lookingForAJob,
			lookingForAJobDescription: lookingForAJobDescription || '',
			contacts: {
				mainLink,
				vk,
				...socialAccounts,
			},
		}
	}

	const [editProfile, { isLoading, isError, data }] =
		useEditProfileInfoMutation()

	return [
		() => {
			if (info) {
				const editProfileBody = createEditProfileBody(
					name,
					info.userId,
					bio,
					isLookingForJob,
					jobDescription
				)

				editProfile(editProfileBody)
			}
		},
		{
			isLoading,
			isError,
			data,
		},
	]
}
