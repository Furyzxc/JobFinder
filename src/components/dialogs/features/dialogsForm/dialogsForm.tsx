import SendIcon from '@mui/icons-material/Send'
import { InputBase } from '@mui/material'
import { memo } from 'react'
import { useDialogsForm } from '../../model/hooks'
import s from './style.module.css'

export const DialogsForm = memo(() => {
	const { submit, register, isValid, disabled, sendOnEnterClick } =
		useDialogsForm()

	return (
		<form onSubmit={submit}>
			<InputBase
				{...register('input', { required: true })}
				disabled={disabled}
				size={'small'}
				placeholder='Type your message here...'
				autoComplete={'off'}
				className={s.input}
				sx={{ bgcolor: 'primary.light' }}
				onKeyDown={sendOnEnterClick}
				endAdornment={
					<SendIcon
						sx={{
							cursor: 'pointer',
							color: isValid ? 'secondary.light' : undefined,
						}}
						onClick={submit}
					/>
				}
			/>
		</form>
	)
})
