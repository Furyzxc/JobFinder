import { TextField } from '@mui/material'
import { FocusEvent } from 'react'

interface InputProps {
	onBlur?: (value: string) => void
	width?: string
}

export const Input = ({ onBlur, width, ...inputProps }: InputProps & any) => {
	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		onBlur && onBlur(e.target.value)

	return (
		<TextField
			{...inputProps}
			size={'small'}
			maxRows={4}
			sx={{ width: width || '80%', bgcolor: 'primary.dark' }}
			onBlur={handleBlur}
			InputProps={{
				style: {
					borderRadius: 0,
				},
			}}
		/>
	)
}
