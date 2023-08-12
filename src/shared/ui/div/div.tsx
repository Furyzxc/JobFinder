import { Alert } from '@mui/material'
import { ReactNode } from 'react'

interface DivProps {
	children: ReactNode
}

export const Div = ({ children }: DivProps) => {
	return (
		<Alert
			severity='success'
			color='info'
			sx={{
				// width: '70%',
				// color: '#98C1D2',
				textAlign: 'center',
				backgroundColor: '#161B22',
				position: 'absolute',
				top: '40%',
				left: '15%',
				right: '15%',
			}}
		>
			{children}
		</Alert>
	)
}
