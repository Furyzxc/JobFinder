import { useOwnerInfo } from '@/components/settings/model/hooks/useOwnerInfo.ts'

interface JobInfo {
	isLookingForJob:
		| {
				name: 'Looking for a job'
				value: boolean
		  }
		| undefined
	description:
		| {
				name: 'Additional Information'
				value: string
		  }
		| undefined
}

export const useJobInfo = (): JobInfo => {
	const { info } = useOwnerInfo()

	if (info) {
		return {
			isLookingForJob: {
				name: 'Looking for a job',
				value: info.lookingForAJob,
			},
			description: {
				name: 'Additional Information',
				value: info.lookingForAJobDescription || '',
			},
		}
	}

	return {
		isLookingForJob: undefined,
		description: undefined,
	}
}
