import SendIcon from '@mui/icons-material/Send'
import { TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useSendMessageMutation } from '../../api/api.ts'

interface FormValues {
	input: string
}

export const DialogsForm = () => {
	const { userId } = useParams()

	const [inputValue, setInputValue] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value)

	const { handleSubmit, register, reset } = useForm<FormValues>()

	const [sendMessage, { isLoading }] = useSendMessageMutation()

	const onSubmit = handleSubmit(({ input }: FormValues) => {
		userId && sendMessage({ userId: +userId, body: input })
		reset()
	})

	return (
		<form onSubmit={onSubmit}>
			<TextField
				{...register('input', { required: true })}
				disabled={isLoading}
				size={'small'}
				placeholder='Type your message here...'
				sx={{ width: '100%', mb: '1px' }}
				value={inputValue}
				onChange={handleChange}
				InputProps={{
					style: {
						borderRadius: 0,
						backgroundColor: '#161B22',
						fontSize: '14px',
					},
					endAdornment: (
						<SendIcon
							sx={{
								cursor: 'pointer',
								color: inputValue && 'white',
							}}
							onClick={onSubmit}
						/>
					),
				}}
			/>
		</form>
	)
}
