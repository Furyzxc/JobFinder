import { useGetProfile } from './useGetProfile.ts'

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
