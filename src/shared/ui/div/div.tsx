import { Alert, Grid } from '@mui/material'
import { ReactNode } from 'react'

interface DivProps {
	children: ReactNode
	color?: string
	bg?: string
}

export const Div = ({ children, bg, color }: DivProps) => {
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
						color: color || 'info.light',
						width: '100%',
						bgcolor: bg || 'info.main',
					}}
				>
					{children}
				</Alert>
			</Grid>
		</Grid>
	)
}
