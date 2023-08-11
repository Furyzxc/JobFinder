import SendIcon from '@mui/icons-material/Send'
import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useSendMessageMutation } from '../../api/api.ts'
import s from './dialogsForm.module.css'

interface FormValues {
	input: string
}

export const DialogsForm = () => {
	const { userId } = useParams()

	const { handleSubmit, register, reset } = useForm<FormValues>()

	const [sendMessage, { isLoading }] = useSendMessageMutation()

	const onSubmit: SubmitHandler<FormValues> = ({ input }) => {
		userId && sendMessage({ userId: +userId, body: input })
		reset()
	}

	return (
		<form className={s.dialogsForm} onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('input', { required: true })}
				disabled={isLoading}
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
		</form>
	)
}
