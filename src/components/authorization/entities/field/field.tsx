import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { FormValues } from '../../features/form'

interface LoginFormFieldProps {
	name: 'email' | 'password' | 'rememberMe'
	label: string
	type?: string
	autoComplete: string
	register: UseFormRegister<FormValues>
	error?: boolean
	defaultValue: string
}

export const Field = ({
	name,
	label,
	type,
	autoComplete,
	register,
	error,
	defaultValue,
}: LoginFormFieldProps) => {
	return (
		<TextField
			{...register(name)}
			defaultValue={defaultValue}
			margin='normal'
			fullWidth
			name={name}
			label={label}
			type={type}
			autoComplete={autoComplete}
			error={error}
		/>
	)
}
