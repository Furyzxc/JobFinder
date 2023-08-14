import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { useAuthInfo } from '@/components/authorization'
import { useGetProfileQuery } from '@/components/profile'
import { ProfileResponseBody } from '@/components/profile/api/types.ts'
import { selectProfile } from '@/components/profile/model/slice.ts'

export const useProfile = () => {
	return useAppSelector(selectProfile)
}

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
	data: ProfileResponseBody | undefined
}

export const useGetProfile = (): GetProfile => {
	const { id } = useUserDetails()

	const { data } = useGetProfileQuery(id || 0, {
		skip: !id,
	})

	return { data }
}

export const useMainInfo = (): MainInfo[] | undefined => {
	const { data: userProfile } = useGetProfile()

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
	const { data } = useGetProfile()

	if (data) {
		return [
			{
				key: Math.random(),
				name: 'Looking for a job',
				textValue: data.lookingForAJob
					? 'Currently open to job opportunities'
					: 'Not currently seeking a job',
			},
			{
				key: Math.random(),
				name: 'Description',
				textValue: data.lookingForAJobDescription || '',
				multiline: true,
			},
		]
	}
}
