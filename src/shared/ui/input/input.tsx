import { TextField } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

interface InputProps {
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void
	onChange?: (value: string) => void
	value?: string
	label?: string
	multiline?: boolean
	defaultValue?: string
	ref?: any
	placeholder?: string
}

export const Input = ({
	onBlur,
	value,
	onChange,
	label,
	multiline,
	defaultValue,
	ref,
	placeholder,
}: InputProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		onChange && onChange(e.target.value)

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
			onBlur={onBlur}
			inputRef={ref}
			placeholder={placeholder}
		/>
	)
}
