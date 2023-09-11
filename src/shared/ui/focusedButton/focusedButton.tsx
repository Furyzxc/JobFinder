import { Button as MuiButton, Typography } from '@mui/material'
import { ReactNode } from 'react'
import s from './focusedButton.module.css'

type PropsType = {
	onClick?: () => void
	startIcon?: ReactNode
	endIcon?: ReactNode
	children: ReactNode
	bgColor?: string | boolean
}

export const FocusedButton = ({
	onClick,
	startIcon,
	endIcon,
	children,
	bgColor,
}: PropsType) => {
	return (
		<MuiButton
			onClick={onClick}
			className={s.btn}
			sx={{
				textAlign: 'none',
				minWidth: '100%',
				justifyContent: 'flex-start',
				height: '32px',
				color: 'secondary',
				bgcolor: bgColor ? 'secondary' : 'inherit',
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
