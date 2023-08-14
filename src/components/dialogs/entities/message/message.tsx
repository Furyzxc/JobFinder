import DoneAllIcon from '@mui/icons-material/DoneAll'
import { clsx } from 'clsx'
import { useFormattedTime } from '@/shared/model/hooks'
import { MessageResponseType } from '../../api/types.ts'
import s from './message.module.css'

interface MessageProps extends Omit<MessageResponseType, 'id'> {
	// is it your own message or your friend, if true its your own
	me: boolean
}

export const Message = ({ body, addedAt, me, viewed }: MessageProps) => {
	// converting time to 12:32 PM format
	const time = useFormattedTime(addedAt, 'HH:mm A')

	return (
		<div>
			<div className={clsx(s.message, me ? s.myMessage : s.friendMessage)}>
				<div className={s.text}>{body}</div>
				<div className={s.time}>{time}</div>
				<div className={s.tick}>
					<DoneAllIcon
						sx={{ fontSize: '12px', color: viewed ? '#66B7F6' : 'white' }}
					/>
				</div>
			</div>
		</div>
	)
}
