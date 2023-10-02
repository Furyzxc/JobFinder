import { Snackbar } from '@mui/material'
import { ReactNode, useState } from 'react'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	// if (isError) {
	// 	return <Div>Some error occured...</Div>
	// }
	const [open, setOpen] = useState(isError)

	const close = () => setOpen(false)

	return (
		<>
			{children}
			<Snackbar
				message='Some error occured...'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={open}
				onClose={close}
			/>
		</>
	)
}
