import { Box, Stack, Typography } from '@mui/material'
import { useAnimate, useInView } from 'framer-motion'
import { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDialogsTime } from '@/shared/model/hooks.ts'
import { UserAvatar } from '@/shared/ui/avatar'
import { DialogsResponse } from '../../api/types.ts'
import s from './dialog.module.css'

export const Dialog = memo(
	({
		userName,
		id,
		lastDialogActivityDate,
		photos: { small },
	}: DialogsResponse) => {
		const [scope, animate] = useAnimate()
		const isInView = useInView(scope)

		useEffect(() => {
			if (isInView) animate(scope.current, { opacity: 1 })
		}, [animate, isInView, scope])

		const time = useDialogsTime(lastDialogActivityDate)

		return (
			<Link to={'/dialogs/' + id} className={s.dialog} ref={scope}>
				<Stack
					direction={'row'}
					spacing={1}
					sx={{
						position: 'relative',
						pt: '7px',
						minHeight: '54px',
						backgroundColor: 'inherit',
					}}
				>
					<Box className={s.avatar}>
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
			</Link>
		)
	}
)
