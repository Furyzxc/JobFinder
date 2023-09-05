import { TextField } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

interface InputProps {
	onBlur?: (value: string) => void
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	value?: string
	multiline?: boolean
	defaultValue?: string | null | boolean
	placeholder?: string
	disabled?: boolean
	width?: string
	autoComplete?: 'off'
}

export const Input = ({ onBlur, width, ...inputProps }: InputProps) => {
	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		onBlur && onBlur(e.target.value)

	return (
		<TextField
			{...inputProps}
			size={'small'}
			maxRows={4}
			sx={{ width: width || '80%' }}
			onBlur={handleBlur}
			InputProps={{
				style: {
					borderColor: 'white',
				},
			}}
		/>
	)
}
