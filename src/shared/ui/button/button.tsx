import { Button as MuiButton, Typography } from '@mui/material'
import { ReactNode } from 'react'
import s from './button.module.css'

type PropsType = {
	onClick?: () => void
	startIcon?: ReactNode
	endIcon?: ReactNode
	children: ReactNode
	bgColor?: string | boolean
}

export const Button = ({
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
				color: '#7D8590',
				backgroundColor: bgColor ? '#1A1F24' : 'inherit',
			}}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			<Typography
				variant={'h1'}
				sx={{
					color: '#E6EDF3',
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
