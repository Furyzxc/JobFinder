import { Box, Stack, Typography } from '@mui/material'
import clsx from 'clsx'
import { useAnimate, useInView } from 'framer-motion'
import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDialogsTime } from '@/shared/model/hooks.ts'
import { UserAvatar } from '@/shared/ui/avatar'
import { DialogsResponse } from '../../api/types.ts'
import s from './dialog.module.css'

interface PropsType extends DialogsResponse {
	isSelected: boolean
}

export const Dialog = memo(
	({
		isSelected,
		userName,
		id,
		lastDialogActivityDate,
		photos: { small },
	}: PropsType) => {
		const navigate = useNavigate()

		const [scope, animate] = useAnimate()
		const isInView = useInView(scope)

		useEffect(() => {
			if (isInView) animate(scope.current, { opacity: 1 }, { duration: 0.2 })
			else animate(scope.current, { opacity: 0 }, { duration: 0 })
		}, [animate, isInView, scope])

		const handleDialogClick = () => navigate('/dialogs/' + id)

		const time = useDialogsTime(lastDialogActivityDate)

		return (
			<Stack
				onClick={handleDialogClick}
				className={clsx(s.dialog, isSelected && s.selected)}
				ref={scope}
				direction={'row'}
			>
				<Box className={s.avatar} sx={{ mr: '5px' }}>
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
