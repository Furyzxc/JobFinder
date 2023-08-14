import { Stack } from '@mui/material'
import { Input } from '@/shared/ui/input'
import { useJobInfo } from '../../model/hooks.ts'
import { Section } from '../section'

export const JobInfo = () => {
	const entities = useJobInfo()

	if (entities)
		return (
			<Stack spacing={2}>
				{entities.map(({ textValue, ...sectionProps }) => (
					<Section {...sectionProps}>
						<Input disabled multiline defaultValue={textValue} />
					</Section>
				))}
			</Stack>
		)

	return null
}
