import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useAppDispatch } from '@/shared/model/hooks'
import { Error } from '../../entities/error'
import { Field } from '../../entities/field'
import { useAuth } from '../../model/hooks.ts'
import { authLogin } from '../../model/slice.ts'

export interface FormValues {
	email: string
	password: string
	rememberMe: boolean | undefined
}

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Enter your email').email('Enter valid email'),
	password: Yup.string()
		.min(7, 'Too short')
		.max(20, 'Too long')
		.required('Enter your password'),
	rememberMe: Yup.boolean(),
})

export const Form = () => {
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
				register={register}
				label={errors?.email?.message || 'Email Address'}
				name='email'
				autoComplete='email'
				autoFocus
				error={!!(errors.email || error)}
			/>
			<Field
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
				rules={{ required: true }}
				render={({ field }) => (
					<FormControlLabel
						{...field}
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
				)}
			/>

			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign In
			</Button>

			{error && <Error error={error} />}
		</Box>
	)
}
