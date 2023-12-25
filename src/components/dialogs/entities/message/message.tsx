import DoneAllIcon from '@mui/icons-material/DoneAll'
import { Box, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { WithSlide } from '@/shared/hoc'
import { formatTime } from '@/shared/lib/format-time.ts'
import { MessageResponseType } from '@/components/dialogs'
import s from './message.module.css'

type MessageProps = {
	// if me = true, it is your message, if me = false - it is friend's message
	me: boolean
} & Omit<MessageResponseType, 'id'>

export const Message = memo(({ body, addedAt, me, viewed }: MessageProps) => {
	// converting time to 0:32 PM format
	const time = formatTime(addedAt, 'h:mm A')

	const [, copy] = useCopyToClipboard()

	return (
		<WithSlide direction={'left'} open={true}>
			<Box
				sx={{
					bgcolor: me ? 'info.dark' : 'info.main',
					overflow: 'hidden',
				}}
				className={clsx(s.message, me ? s.myMessage : s.friendMessage)}
				onClick={() => copy(body)}
			>
				<Typography variant={'h2'} className={s.text}>
					{body}
				</Typography>
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
		</WithSlide>
	)
})
