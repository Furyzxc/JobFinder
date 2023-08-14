import { Alert, Grid } from '@mui/material'
import { ReactNode } from 'react'

interface DivProps {
	children: ReactNode
}

export const Div = ({ children }: DivProps) => {
	return (
		<Grid container sx={{ position: 'absolute', top: '40%', left: 0 }}>
			<Grid
				item
				xs={11}
				sm={8}
				md={8}
				sx={{
					m: '0 auto',
					textAlign: 'center',
				}}
			>
				<Alert
					severity='success'
					color='info'
					sx={{
						width: '100%',
						// color: '#98C1D2',
						backgroundColor: '#21262D',
					}}
				>
					{children}
				</Alert>
			</Grid>
		</Grid>
	)
}
