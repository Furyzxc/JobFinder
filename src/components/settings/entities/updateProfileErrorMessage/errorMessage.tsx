import { CloseSharp } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { useActions } from '@/shared/model/hooks.ts'
import { useProfileSettings } from '../../model/hooks/useProfileSettings.ts'
import s from './style.module.css'

export const ErrorMessage = () => {
	const { updateProfileErrorMessage } = useProfileSettings()

	const { clearErrorMessage } = useActions()

	const handleCrossClick = () => clearErrorMessage()

	if (updateProfileErrorMessage)
		return (
			<Grid
				container
				className={s.error}
				sx={{
					backgroundColor: '#25171C',
					p: '20px 16px',
					width: '95%',
					fontSize: '14px',
				}}
			>
				<Grid item xs>
					<Typography variant={'h1'}>{updateProfileErrorMessage}</Typography>
				</Grid>
				<Grid item sx={{ cursor: 'pointer' }} onClick={handleCrossClick}>
					<CloseSharp sx={{ color: '#E34B45', fontSize: '15px', mt: '2px' }} />
				</Grid>
			</Grid>
		)
	return null
}
