import { Alert } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	if (isError) {
		return (
			<Alert
				sx={{
					width: '50%',
					color: '#98C1D2FF',
					textAlign: 'center',
					backgroundColor: '#071318',
					position: 'absolute',
					top: '40%',
					left: '30%',
				}}
				severity='info'
			>
				Something went wrong during loading!
			</Alert>
		)
	}

	return <>{children}</>
}
