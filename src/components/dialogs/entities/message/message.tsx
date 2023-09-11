import DoneAllIcon from '@mui/icons-material/DoneAll'
import { Box } from '@mui/material'
import { clsx } from 'clsx'
import { formatTime } from '@/shared/lib/format-time.ts'
import { useCopyText } from '@/shared/model/hooks'
import { MessageResponseType } from '../../api/types.ts'
import s from './message.module.css'

interface MessageProps extends Omit<MessageResponseType, 'id'> {
	// is it your own message or your friend, if true its your own
	me: boolean
}

export const Message = ({ body, addedAt, me, viewed }: MessageProps) => {
	// converting time to 0:32 PM format
	const time = formatTime(addedAt, 'h:mm A')

	const { textRef, copyText } = useCopyText()

	// copies text to clipboard
	const handleMessageClick = () => copyText()

	return (
		<Box
			sx={{ bgcolor: me ? 'primary.main' : 'secondary.main' }}
			className={clsx(s.message, me ? s.myMessage : s.friendMessage)}
			onClick={handleMessageClick}
		>
			<div className={s.text} ref={textRef}>
				{body}
			</div>
			<div className={s.time + ' notranslate'}>{time}</div>
			<div className={s.tick + ' notranslate'}>
				<DoneAllIcon
					sx={{ fontSize: '12px', color: viewed ? '#66B7F6' : 'white' }}
				/>
			</div>
		</Box>
	)
}
