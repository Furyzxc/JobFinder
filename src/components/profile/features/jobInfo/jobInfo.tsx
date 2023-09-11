import { Stack } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { DisabledInput } from '@/shared/ui/disabledInput'
import { Section } from '../section'

type PropsType = {
	isLookingForJob?: boolean
	additionalInfo?: string
	isLoading: boolean
}

export const JobInfo = ({
	isLookingForJob,
	additionalInfo,
	isLoading,
}: PropsType) => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack sx={{ opacity: 0 }} spacing={2} ref={ref}>
			<Section name={'Looking for a job'} isLoading={isLoading}>
				<DisabledInput
					value={
						isLookingForJob
							? 'Currently open to job opportunities'
							: 'Not currently seeking a job'
					}
				/>
			</Section>
			<Section name={'Additional Information'} isLoading={isLoading}>
				<DisabledInput value={additionalInfo || ''} />
			</Section>
		</Stack>
	)
}
