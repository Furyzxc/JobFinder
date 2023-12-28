import { Done, DoneAll } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { clsx } from 'clsx'
import { memo } from 'react'
//import { useCopyToClipboard } from 'usehooks-ts'
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

	//const [, copy] = useCopyToClipboard()

	const onClick = (e: any) => {
		if (e.type === 'contextmenu') {
			alert(1)
		}
		console.log(e)
	}

	return (
		<WithSlide direction={'left'} open={true}>
			<Box
				sx={{
					bgcolor: me ? 'info.dark' : 'info.main',
					overflow: 'hidden',
				}}
				className={clsx(s.message, me ? s.myMessage : s.friendMessage)}
				onClick={onClick}
			>
				<Typography variant={'h2'} className={s.text}>
					{body}
				</Typography>
				<Box className={s.box}>
					<Typography
						color={me ? 'warning.main' : 'warning.light'}
						className={s.time + ' notranslate'}
					>
						{time}
					</Typography>
					{me &&
						(viewed ? (
							<DoneAll sx={{ fontSize: 12 }} />
						) : (
							<Done sx={{ fontSize: 12 }} />
						))}
				</Box>
			</Box>
		</WithSlide>
	)
})
