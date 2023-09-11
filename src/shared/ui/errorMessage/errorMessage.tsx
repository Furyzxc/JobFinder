import { CloseSharp } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import s from './style.module.css'

type PropsType = {
	message: string
	onCrossClick: () => void
}

export const ErrorMessage = ({ message, onCrossClick }: PropsType) => {
	return (
		<Grid
			container
			className={s.error}
			sx={{
				backgroundColor: 'error.light',
				p: '20px 16px',
				fontSize: '14px',
			}}
		>
			<Grid item xs>
				<Typography variant={'h1'}>{message}</Typography>
			</Grid>
			<Grid item sx={{ cursor: 'pointer' }} onClick={onCrossClick}>
				<CloseSharp sx={{ color: 'error.main', fontSize: '15px', mt: '2px' }} />
			</Grid>
		</Grid>
	)
}
