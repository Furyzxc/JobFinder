import { useParams } from 'react-router-dom'
import { ProfileResponseBody } from '../api/types.ts'
import { useAuthInfo } from '@/components/authorization'
import { useGetProfileQuery } from '@/components/profile'

interface UserIdFromParamsOutput {
	id: number | undefined
	isOwner: boolean
}

export const useUserDetails = (): UserIdFromParamsOutput => {
	const { id } = useAuthInfo()
	// if no user id in url returns id from parameters and sets isOwner on true

	const { userId = id } = useParams()

	return {
		id: userId ? +userId : undefined,
		isOwner: userId === id,
	}
}

interface MainInfo {
	name: string
	textValue: string
}

interface GetProfile {
	profileData: ProfileResponseBody | undefined
	isLoading: boolean
	isError: boolean
	isOwner: boolean
}

export const useGetProfile = (): GetProfile => {
	const { id, isOwner } = useUserDetails()

	const { data, isLoading, isError } = useGetProfileQuery(id || 0, {
		skip: !id,
	})

	return { profileData: data, isLoading, isError, isOwner }
}

export const useMainInfo = (): MainInfo[] | undefined => {
	const { profileData: userProfile } = useGetProfile()

	if (userProfile) {
		return [
			{
				name: 'Name',
				textValue: userProfile.name,
			},
			{
				name: 'Bio',
				// if bio is null setting value ''
				textValue: userProfile.bio || '',
			},
		]
	}
}

interface JobInfo {
	key: number
	name: string
	textValue: string
	multiline?: true
}

export const useJobInfo = (): JobInfo[] | undefined => {
	const { profileData } = useGetProfile()

	if (profileData) {
		return [
			{
				key: Math.random(),
				name: 'Looking for a job',
				textValue: profileData.lookingForAJob
					? 'Currently open to job opportunities'
					: 'Not currently seeking a job',
			},
			{
				key: Math.random(),
				name: 'Description',
				textValue: profileData.lookingForAJobDescription || '',
				multiline: true,
			},
		]
	}
}
