import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	email: Yup.string().required('Enter your email').email('Enter valid email'),
	password: Yup.string()
		.min(7, 'Too short')
		.max(20, 'Too long')
		.required('Enter your password'),
	rememberMe: Yup.boolean(),
})
