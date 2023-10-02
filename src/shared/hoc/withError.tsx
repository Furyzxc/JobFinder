import { Snackbar } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	// if (isError) {
	// 	return <Div>Some error occured...</Div>
	// }
	return (
		<>
			{children}
			<Snackbar
				message='Some error occured...'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={isError}
			/>
		</>
	)
}
