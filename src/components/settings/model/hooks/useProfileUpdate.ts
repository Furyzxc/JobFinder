import { useOwnerInfo } from './useOwnerInfo.ts'
import { useProfileSettings } from './useProfileSettings.ts'
import {
	EditProfileRequest,
	useEditProfileInfoMutation,
} from '@/components/settings/api/api.ts'

type Output = [
	// function that call update
	trigger: () => void,
]

export const useProfileUpdate = (): Output => {
	const {
		name,
		bio,
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

	const [editProfile] = useEditProfileInfoMutation()

	return [
		() => {
			if (info) {
				const { lookingForAJob, lookingForAJobDescription, userId } = info

				const editProfileBody = createEditProfileBody(
					name,
					userId,
					bio,
					lookingForAJob,
					lookingForAJobDescription
				)

				editProfile(editProfileBody)
			}
		},
	]
}
