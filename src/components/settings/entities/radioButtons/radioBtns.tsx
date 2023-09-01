import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FocusEvent } from 'react'
import { useActions, useInput } from '@/shared/model/hooks'
import { Section } from '../profileSection'

type PropsType = {
	initialValue: boolean
}

export const RadioButtons = ({ initialValue }: PropsType) => {
	const { bind } = useInput(initialValue)
	const { setMainValue } = useActions()
	const handleBlur = (e: FocusEvent<HTMLDivElement, Element>) => {
		// parsing string ('true') value to boolean type
		const value: boolean = JSON.parse((e.target as any).value)
		// setting boolean value to store's state
		setMainValue({ fieldName: 'lookingForAJob', value })
	}

	return (
		<Section name={'Looking for a job'}>
			<RadioGroup
				{...bind}
				onBlur={handleBlur}
				sx={{ pl: '13px' }}
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
				// setting default value from state
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
	)
}
