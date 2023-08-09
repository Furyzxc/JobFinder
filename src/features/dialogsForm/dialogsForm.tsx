import SendIcon from '@mui/icons-material/Send'
import { Button } from '@mui/material'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useParams } from 'react-router-dom'
import { useSendMessageMutation } from '@/slices/dialogs'
import s from './dialogsForm.module.css'

interface FormValues {
	input: string
}

export const DialogsForm = () => {
	const { userId } = useParams()

	const initialValues: FormValues = { input: '' }

	const [sendMessage, { isLoading }] = useSendMessageMutation()

	const handleSubmit = (
		{ input }: FormValues,
		{ resetForm }: FormikHelpers<FormValues>
	) => {
		input && userId && sendMessage({ userId: +userId, body: input })
		resetForm()
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={s.dialogsForm}>
				<Field
					disabled={isLoading}
					type='text'
					name='input'
					placeholder='Type your message here...'
					className={s.input}
					autoComplete='off'
				/>
				<Button
					sx={{ width: '100%' }}
					variant='text'
					endIcon={<SendIcon />}
					type='submit'
				>
					Send
				</Button>
			</Form>
		</Formik>
	)
}
