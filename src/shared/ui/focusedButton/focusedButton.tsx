import { Button as MuiButton, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	onClick?: () => void
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
				bgcolor: selected ? 'warning.dark' : 'inherit',
				'&:focus': {
					bgcolor: 'warning.dark',
				},
				'&:focus, &:hover': {
					bgcolor: selected ? 'warning.dark' : 'secondary.main',
				},
			}}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			<Typography
				variant={'h1'}
				sx={{
					color: 'secondary',
					fontSize: '13px',
					pt: '5px',
					flexGrow: 1,
					textAlign: 'start',
				}}
			>
				{children}
			</Typography>
		</MuiButton>
	)
}
