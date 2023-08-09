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
				width: '50%',
				color: '#98C1D2FF',
				textAlign: 'center',
				backgroundColor: '#071318',
				position: 'absolute',
				top: '40%',
				left: '30%',
			}}
		>
			{children}
		</Alert>
	)
}
