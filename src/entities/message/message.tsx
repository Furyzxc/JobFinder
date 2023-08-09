import DoneAllIcon from '@mui/icons-material/DoneAll'
import { clsx } from 'clsx'
import { useFormattedTime } from '@/shared/model/hooks.ts'
import { MessageResponseType } from '@/shared/types/api/dialogs-types.ts'
import s from './message.module.css'

interface MessageProps extends MessageResponseType {
	me: boolean
}

export const Message = ({ body, addedAt, me, viewed }: MessageProps) => {
	const time = useFormattedTime(addedAt)

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
