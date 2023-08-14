import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material'
import { ChangeEvent, useEffect } from 'react'
import { Input } from '@/shared/ui/input'
import { useJobInfo, useSetFieldValue } from '../../model/hooks'
import { Section } from '../profileSection'

export const JobInfo = () => {
	const { isLookingForJob, description } = useJobInfo()

	const [setFieldValue] = useSetFieldValue()

	useEffect(() => {
		// check on undefined
		if (isLookingForJob && description) {
			// setting initial isLookingForAJob and jobDesctiption values to store's state
			setFieldValue('isLookingForJob', isLookingForJob.value)
			setFieldValue('jobDescription', description.value)
		}
	}, [description, isLookingForJob, setFieldValue])

	const handleRadioGroupChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		// parsing string ('true') values to boolean type
		const value: boolean = JSON.parse(target.value)
		// setting boolean value to store's state
		setFieldValue('isLookingForJob', value)
	}
	const handleDescriptionBlur = (value: string) =>
		// setting value to store's state
		setFieldValue('jobDescription', value)

	if (isLookingForJob !== undefined && description !== undefined) {
		return (
			<>
				<Stack spacing={1}>
					<Section name={isLookingForJob.name}>
						<RadioGroup
							onChange={handleRadioGroupChange}
							sx={{ ml: '13px' }}
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							name='row-radio-buttons-group'
							defaultValue={isLookingForJob.value}
						>
							<FormControlLabel
								value='true'
								control={<Radio size={'small'} />}
								label='Open to job opportunities'
							/>
							<FormControlLabel
								value='false'
								control={<Radio size={'small'} />}
								label='Not currently seeking a job'
							/>
						</RadioGroup>
					</Section>
					<Section name={description.name}>
						<Input
							multiline
							defaultValue={description.value}
							onBlur={handleDescriptionBlur}
						/>
					</Section>
				</Stack>
			</>
		)
	}
}
