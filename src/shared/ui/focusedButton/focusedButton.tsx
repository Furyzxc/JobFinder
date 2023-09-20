import { Button as MuiButton, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	onClick?: any
	startIcon?: ReactNode
	endIcon?: ReactNode
	children: ReactNode
	selected?: string | boolean
}

export const FocusedButton = ({
	onClick,
	startIcon,
	endIcon,
	children,
	selected,
}: PropsType) => {
	return (
		<MuiButton
			onClick={onClick}
			sx={{
				textAlign: 'none',
				minWidth: '100%',
				justifyContent: 'flex-start',
				height: '32px',
				color: 'warning.main',
				bgcolor: selected ? 'secondary.main' : 'inherit',
				'&:hover': {
					bgcolor: 'success.light',
				},
				'&:focus': {
					bgcolor: 'secondary.main',
					opacity: 1,
				},
			}}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			<Typography
				variant={'h3'}
				sx={{
					color: 'secondary',
					fontSize: '13px',
					textTransform: 'none',
					letterSpacing: 0.8,
					pt: '2px',
					flexGrow: 1,
					textAlign: 'start',
				}}
			>
				{children}
			</Typography>
		</MuiButton>
	)
}
