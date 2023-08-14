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
				className={clsx(s.dialog, isSelected && s.selected)}
				ref={ref}
				direction={'row'}
			>
				<Box sx={{ mr: '10px' }}>
					<UserAvatar avatar={small} name={userName} />
				</Box>
				<Box sx={{ pt: '10px' }}>
					<Typography noWrap>{userName}</Typography>
				</Box>
				<Typography
					variant={'h1'}
					sx={{ fontSize: '12px', color: '#8696a8' }}
					className={s.time}
				>
					{time}
				</Typography>
			</Stack>
		)
	}
)
