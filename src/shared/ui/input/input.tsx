import { TextField } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

interface InputProps {
	onBlur?: (value: string) => void
	onChange?: (value: string) => void
	value?: string
	label?: string
	multiline?: boolean
	defaultValue?: string | null
	placeholder?: string
}

export const Input = ({
	onBlur,
	value,
	onChange,
	label,
	multiline,
	defaultValue,
	placeholder,
}: InputProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		onChange && onChange(e.target.value)

	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		onBlur && onBlur(e.target.value)

	return (
		<TextField
			size={'small'}
			defaultValue={defaultValue}
			maxRows={4}
			multiline={multiline}
			hiddenLabel={!!label}
			label={label}
			autoComplete='off'
			sx={{ width: '80%' }}
			value={value}
			onChange={handleInputChange}
			onBlur={handleBlur}
			placeholder={placeholder}
		/>
	)
}
