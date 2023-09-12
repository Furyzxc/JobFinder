import { Button as MuiButton, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	startIcon?: ReactNode
	children: ReactNode
	disabled?: boolean
	onClick: () => void
}

export const Button = ({
	startIcon,
	children,
	disabled,
	onClick,
}: PropsType) => {
	return (
		<MuiButton
			startIcon={startIcon}
			disabled={disabled}
			onClick={onClick}
			color={'warning'}
		>
			<Typography variant={'h4'} fontSize={'12px'} color={'inherit'}>
				{children}
			</Typography>
		</MuiButton>
	)
}
