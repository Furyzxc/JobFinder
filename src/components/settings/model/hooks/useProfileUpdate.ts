import {
	EditProfileRequest,
	useEditProfileInfoMutation,
} from '../../api/api.ts'
import { useProfileSettings } from './useProfileSettings.ts'

/**
 * Represents the output structure of the profile update hook.
 */
type ProfileUpdate = [
	// Function to trigger the profile update
	trigger: () => void,
	// Status and response data
	data: {
		isLoading: boolean
		isError: boolean
		data: EditProfileResponse | undefined
	},
]

/**
 * Custom hook for handling profile updates.
 */
export const useProfileUpdate = (): ProfileUpdate => {
	const {
		userId,
		name: fullName,
		bio: aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		socialAccounts: { telegram: mainLink, linkedin: vk, ...socialAccounts },
	} = useProfileSettings()

	const editProfileBody: EditProfileRequest = {
		fullName,
		userId,
		aboutMe: aboutMe || '',
		lookingForAJob,
		lookingForAJobDescription,
		contacts: {
			vk,
			mainLink,
			...socialAccounts,
		},
	}

	const [editProfile, { isLoading, isError, data }] =
		useEditProfileInfoMutation()

	return [
		() => editProfile(editProfileBody),
		{
			isLoading,
			isError,
			data,
		},
	]
}
