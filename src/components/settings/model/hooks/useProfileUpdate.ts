import {
	EditProfileRequest,
	useEditProfileInfoMutation,
} from '../../api/api.ts'
import { useProfileSettings } from './useProfileSettings.ts'

type ProfileUpdate = [
	// Function to trigger the profile update
	trigger: () => void,
	data: { isLoading: boolean },
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

	const [editProfile, { isLoading }] = useEditProfileInfoMutation()

	return [() => editProfile(editProfileBody), { isLoading }]
}
