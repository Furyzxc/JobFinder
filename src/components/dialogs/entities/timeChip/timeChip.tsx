import { Chip, Divider } from '@mui/material'

type PropsType = {
	time: string
}

export const TimeChip = ({ time }: PropsType) => {
	return (
		<Divider sx={{ mb: '10px', textTransform: 'none' }}>
			<Chip sx={{ bgcolor: '#1A1F24' }} label={time} />
		</Divider>
	)
}
