import { Grid } from '@mui/material'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useActions, useFormattedTime } from '@/shared/model/hooks.ts'
import { DialogsResponse } from '@/shared/types/api/dialogs-types.ts'
import { UserAvatar } from '@/entities/avatar'
import s from './dialog.module.css'

export const Dialog = memo(
	({
		userName,
		id,
		lastDialogActivityDate,
		photos: { small },
	}: DialogsResponse) => {
		const { setDialogName } = useActions()

		const time = useFormattedTime(lastDialogActivityDate)
		const handleClick = () => {
			setDialogName(userName)
		}

		return (
			<Link to={'/dialogs/' + id} onClick={handleClick} className={s.dialog}>
				<Grid
					container
					sx={{
						minHeight: '54px',
						backgroundColor: 'inherit',
					}}
				>
					<Grid item xs={3} sx={{ pb: '5px', pt: '5px' }} className={s.avatar}>
						<UserAvatar avatar={small} name={userName} />
					</Grid>
					<Grid item xs md className={s.name}>
						{userName}
					</Grid>
					<Grid item xs={3} className={s.time}>
						{time}
					</Grid>
				</Grid>
			</Link>
		)
	}
)
