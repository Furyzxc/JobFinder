import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { FormValues } from '@/components/authorization/features/form'

interface LoginFormFieldProps {
	name: 'email' | 'password' | 'rememberMe'
	label: string
	type?: string
	autoComplete: string
	autoFocus?: boolean
	register: UseFormRegister<FormValues>
	error?: boolean
}

export const Field = ({
	name,
	label,
	type,
	autoComplete,
	autoFocus,
	register,
	error,
}: LoginFormFieldProps) => {
	return (
		<TextField
			{...register(name)}
			margin='normal'
			fullWidth
			name={name}
			label={label}
			type={type}
			autoComplete={autoComplete}
			autoFocus={autoFocus}
			error={error}
		/>
	)
}
