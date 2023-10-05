import { Button, ButtonProps, Typography } from '@mui/material'
import { ReactNode } from 'react'

type PropsType = {
	children: ReactNode
} & ButtonProps

export const ContainedButton = ({ children, ...props }: PropsType) => {
	return (
		<div>
			<Button
				{...props}
				variant={'contained'}
				disableRipple
				sx={{
					height: '27px',
					bgcolor: 'secondary.main',
					'&:hover, &:focus:hover': {
						bgcolor: 'secondary.main',
						border: '1px solid',
						borderColor: 'secondary.light',
					},
					'&:focus': {
						bgcolor: 'secondary.main',
						border: 'max(1px, 0.0625rem) solid #2E343B',
					},
					border: 'max(1px, 0.0625rem) solid #2E343B',
				}}
			>
				<Typography
					sx={{
						textTransform: 'none',
						fontSize: '12px',
						color: 'secondary.light',
					}}
				>
					{children}
				</Typography>
			</Button>
		</div>
	)
}
