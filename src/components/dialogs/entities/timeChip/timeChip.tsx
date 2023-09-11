import { Divider } from '@mui/material'

type PropsType = {
	time: string
}

export const TimeChip = ({ time }: PropsType) => {
	return (
		<Divider sx={{ mb: '10px', textTransform: 'none', color: 'warning.light' }}>
			{time}
		</Divider>
	)
}
