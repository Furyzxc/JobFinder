import SendIcon from '@mui/icons-material/Send'
import { InputBase } from '@mui/material'
import { ChangeEvent, memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useSendMessageMutation } from '../../api/api.ts'
import s from './style.module.css'

interface FormValues {
	input: string
}

export const DialogsForm = memo(() => {
	const { userId } = useParams()

	const [inputValue, setInputValue] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value)

	const { handleSubmit, register } = useForm<FormValues>()

	const [sendMessage, { isLoading }] = useSendMessageMutation()

	const onSubmit = handleSubmit(({ input }: FormValues) => {
		userId && sendMessage({ userId: +userId, body: input })
		setInputValue('')
	})

	return (
		<form onSubmit={onSubmit}>
			<InputBase
				{...register('input', { required: true })}
				disabled={isLoading}
				size={'small'}
				placeholder='Type your message here...'
				autoComplete={'off'}
				className={s.input}
				sx={{ fontSize: '14px', fontWeight: 100 }}
				value={inputValue}
				onChange={handleChange}
				endAdornment={
					<SendIcon
						sx={{
							cursor: 'pointer',
							color: inputValue && 'white',
						}}
						onClick={onSubmit}
					/>
				}
			/>
		</form>
	)
})
