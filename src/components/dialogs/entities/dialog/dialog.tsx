import { Box, Stack, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions, useSmoothAppearance } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { formatTimeByDate } from '../../lib/format-time.ts'
import { DialogsResponse } from '../../api/types.ts'
import s from './dialog.module.css'

interface PropsType extends DialogsResponse {
	isSelected: boolean
}

export const Dialog = memo(
	({
		isSelected,
		userName: name,
		id,
		lastDialogActivityDate,
		photos: { small: avatar },
		hasNewMessages,
	}: PropsType) => {
		const navigate = useNavigate()

		const { setChatProfile } = useActions()

		const { ref } = useSmoothAppearance()

		const handleDialogClick = () => {
			navigate('/dialogs/' + id)

			if (name && avatar !== undefined)
				setChatProfile({ name, avatar, userId: id })
		}

		const time = formatTimeByDate(lastDialogActivityDate)

		return (
			<Stack
				onClick={handleDialogClick}
				className={clsx(s.dialog, isSelected && s.selected, 'notranslate')}
				sx={{
					bgcolor: isSelected ? 'warning.light' : undefined,
					'&:hover': {
						bgcolor: isSelected ? 'warning.light' : 'info.dark',
					},
				}}
				ref={ref}
				direction={'row'}
				alignItems={'center'}
			>
				<Box sx={{ mr: '10px' }}>
					<UserAvatar avatar={avatar} name={name} />
				</Box>
				<Box>
					<Typography color={'secondary.light'} noWrap>
						{name}
					</Typography>
				</Box>
				<Typography
					variant={'h1'}
					sx={{
						fontSize: '12px',
						color: hasNewMessages ? 'primary.main' : 'warning.main',
					}}
					className={s.time}
				>
					{time}
				</Typography>
			</Stack>
		)
	}
)
