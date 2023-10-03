import { Snackbar } from '@mui/material'
import { ReactNode } from 'react'
import { useMuiDialog } from '@/shared/model/hooks'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	// if (isError) {
	// 	return <Div>Some error occured...</Div>
	// }

	const { open, onClose } = useMuiDialog(isError)

	return (
		<>
			{children}
			<Snackbar
				message='Some error occured...'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={open}
				onClose={onClose}
			/>
		</>
	)
}
