import SendIcon from '@mui/icons-material/Send'
import { InputBase } from '@mui/material'
import { memo } from 'react'
import { useDialogsForm } from '@/components/dialogs/model/hooks'
import s from './style.module.css'

export const DialogsForm = memo(() => {
	const { bind, submit, register, disabled, sendOnEnterClick } =
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
				sx={{ fontSize: '14px', fontWeight: 200, bgcolor: 'primary.light' }}
				value={bind.value}
				onChange={bind.onChange}
				onKeyDown={sendOnEnterClick}
				endAdornment={
					<SendIcon
						sx={{
							cursor: 'pointer',
							color: bind.value && 'white',
						}}
						onClick={submit}
					/>
				}
			/>
		</form>
	)
})
