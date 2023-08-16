import { Box, Stack, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/avatar'
import { DialogsResponse } from '../../api/types.ts'
import { useDialogsTime } from '../../model/hooks'
import { BackBtnTypes } from '../backBtn'
import s from './dialog.module.css'

interface PropsType extends DialogsResponse, BackBtnTypes {
	isSelected: boolean
}

export const Dialog = memo(
	({
		isSelected,
		userName,
		id,
		lastDialogActivityDate,
		photos: { small },
		setIsShow,
		hasNewMessages,
	}: PropsType) => {
		const navigate = useNavigate()

		const { ref } = useSmoothAppearance()

		const handleDialogClick = () => {
			setIsShow(false)
			navigate('/dialogs/' + id)
		}

		const time = useDialogsTime(lastDialogActivityDate)

		return (
			<Stack
				onClick={handleDialogClick}
				className={clsx(s.dialog, isSelected && s.selected, 'notranslate')}
				ref={ref}
				direction={'row'}
				alignItems={'center'}
			>
				<Box sx={{ m: '0 10px 0 3px' }}>
					<UserAvatar avatar={small} name={userName} />
				</Box>
				<Box>
					<Typography noWrap>{userName}</Typography>
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
