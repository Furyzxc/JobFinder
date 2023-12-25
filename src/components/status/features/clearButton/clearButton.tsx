import { Button } from '@mui/material'

type PropsType = {
	reset: () => void
}

export const ClearButton = ({ reset }: PropsType) => {
	return (
		<Button
			onClick={reset}
			sx={{
				bgcolor: 'secondary.main',
				minWidth: '250px',
				color: 'secondary.light',
				'&:focus': {
					bgcolor: 'secondary.main',
				},
			}}
		>
			Clear Status
		</Button>
	)
}
