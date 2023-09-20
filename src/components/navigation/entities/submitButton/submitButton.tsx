import { Button } from '@mui/material'

type PropsType = {
	onClick: () => void
	disabled: boolean
}

export const SubmitButton = ({ onClick, disabled }: PropsType) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			variant={'contained'}
			sx={{
				bgcolor: '#238636',
				minWidth: '250px',
				'&:hover': { bgcolor: 'success.dark' },
				'&:focus': { bgcolor: 'success.dark' },
			}}
		>
			Set Status
		</Button>
	)
}
