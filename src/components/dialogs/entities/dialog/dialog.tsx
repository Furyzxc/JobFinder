import { Box, Button, Stack, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { useDialog } from '../../model/hooks'
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
		const { ref, onClick, time } = useDialog(
			name,
			avatar,
			id,
			lastDialogActivityDate
		)

		return (
			<Button sx={{ p: 0 }}>
				<Stack
					onClick={onClick}
					className={clsx(s.dialog, isSelected && s.selected, 'notranslate')}
					sx={{
						width: '100%',
						pl: '3px',
						height: '100%',
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
			</Button>
		)
	}
)
