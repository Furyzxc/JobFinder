import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material'
import { memo } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '@/shared/model/hooks'
import { useAuth } from '../../model/hooks.ts'
import { authLogin } from '../../model/slice.ts'
import { validationSchema } from '../../lib/validation.ts'
import { Error } from '../../entities/error'
import { Field } from '../../entities/field'

export interface FormValues {
	email: string
	password: string
	rememberMe: boolean | undefined
}

export const Form = memo(() => {
	const dispatch = useAppDispatch()
	const { error } = useAuth()

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit: SubmitHandler<FormValues> = ({
		email,
		password,
		rememberMe,
	}) =>
		dispatch(
			authLogin({
				email,
				password,
				rememberMe,
			})
		)

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
			<Field
				defaultValue={'free.fury.acc@gmail.com'}
				register={register}
				label={errors?.email?.message || 'Email Address'}
				name='email'
				autoComplete='email'
				error={!!(errors.email || error)}
			/>
			<Field
				defaultValue={'fury.free'}
				register={register}
				name='password'
				label={errors?.password?.message || 'Password'}
				type='password'
				autoComplete='current-password'
				error={!!(errors.password || error)}
			/>
			<Controller
				name='rememberMe'
				control={control}
				render={({ field }) => (
					<FormControlLabel
						{...field}
						control={<Checkbox value='remember' />}
						label='Remember me'
					/>
				)}
			/>

			<Button
				type='submit'
				fullWidth
				variant='contained'
				color={'primary'}
				sx={{
					mt: 3,
					mb: 2,
					'&:focus': {
						bgcolor: 'primary.main',
					},
					'&:hover': {
						bgcolor: 'success.main',
					},
				}}
			>
				Sign In
			</Button>

			{error && <Error error={error} />}
		</Box>
	)
})
