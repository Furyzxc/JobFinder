import { Snackbar } from '@mui/material'
import { useState } from 'react'

export const ErrorLayout = () => {
	const [open, setOpen] = useState(true)

	const onClose = () => setOpen(false)

	return (
		<Snackbar
			message='Some error occured...'
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={open}
			onClose={onClose}
		/>
	)
}
