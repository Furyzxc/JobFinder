import { Box, Stack, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions, useSmoothAppearance } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/avatar'
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

		const { setChatInfo } = useActions()

		const { ref } = useSmoothAppearance()

		const handleDialogClick = () => {
			navigate('/dialogs/' + id)
			setChatInfo({ name, avatar })
		}

		const time = formatTimeByDate(lastDialogActivityDate)

		return (
			<Stack
				onClick={handleDialogClick}
				className={clsx(s.dialog, isSelected && s.selected, 'notranslate')}
				ref={ref}
				direction={'row'}
				alignItems={'center'}
			>
				<Box sx={{ m: '0 10px 0 3px' }}>
					<UserAvatar avatar={avatar} name={name} />
				</Box>
				<Box>
					<Typography noWrap>{name}</Typography>
				</Box>
				<Typography
					variant={'h1'}
					sx={{
						fontSize: '12px',
						color: hasNewMessages ? '#2299D5' : '#8696a8',
					}}
					className={s.time}
				>
					{time}
				</Typography>
			</Stack>
		)
	}
)
