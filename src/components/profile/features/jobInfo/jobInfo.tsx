import { Stack } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'
import { useJobInfo } from '../../model/hooks'
import { Section } from '../section'

export const JobInfo = () => {
	const entities = useJobInfo()
	const { ref } = useSmoothAppearance()

	if (entities)
		return (
			<Stack sx={{ opacity: 0 }} spacing={2} ref={ref}>
				{entities.map(({ textValue, ...sectionProps }) => (
					<Section {...sectionProps}>
						<Input width={'100%'} disabled multiline defaultValue={textValue} />
					</Section>
				))}
			</Stack>
		)

	return null
}
