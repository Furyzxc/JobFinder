import DoneAllIcon from '@mui/icons-material/DoneAll'
import { Box, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
import { formatTime } from '@/shared/lib/format-time.ts'
import { useCopyText } from '@/shared/model/hooks'
import { MessageType } from '@/components/dialogs/model'
import s from './message.module.css'

type MessageProps = {
	// is it your own message or your friend, if true its your own
	me: boolean
} & Omit<MessageType, 'id'>

export const Message = memo(
	({ body, addedAt, me, viewed, pending }: MessageProps) => {
		// converting time to 0:32 PM format
		const time = formatTime(addedAt, 'h:mm A')

		const { textRef, copyText } = useCopyText()

		return (
			<Box
				sx={{
					bgcolor: me ? 'info.dark' : 'info.main',
					overflow: 'hidden',
					opacity: pending ? 0.5 : 1,
				}}
				className={clsx(s.message, me ? s.myMessage : s.friendMessage)}
				onClick={copyText}
			>
				<div className={s.text} ref={textRef}>
					{body}
				</div>
				<Typography
					color={me ? 'warning.main' : 'warning.light'}
					className={s.time + ' notranslate'}
				>
					{time}
				</Typography>
				<div className={s.tick + ' notranslate'}>
					<DoneAllIcon
						sx={{ fontSize: '12px', color: viewed ? '#66B7F6' : 'white' }}
					/>
				</div>
			</Box>
		)
	}
)
