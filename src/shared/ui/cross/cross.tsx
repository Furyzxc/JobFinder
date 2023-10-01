import { CloseSharp } from '@mui/icons-material'
import { Box } from '@mui/material'

type PropsType = {
	onClick: () => void
}

export const Cross = ({ onClick }: PropsType) => {
	return (
		<Box
			sx={{
				p: '4px',
				color: '#7D8590',
				'&:hover': { bgcolor: 'secondary.main' },
				borderRadius: '4px',
			}}
		>
			<CloseSharp onClick={onClick} />
		</Box>
	)
}
