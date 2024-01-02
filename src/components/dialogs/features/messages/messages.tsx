import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { MessageResponseType } from '@/components/dialogs'
import { checkSameToPrevious } from '../../lib/checkSameToPrevious.ts'
import { formattedToMMMM_D } from '../../lib/formattedToMMMM_D.ts'
import { Message } from '../../entities/message'
import { TimeChip } from '../../entities/timeChip'
import { MessagesSkeletons } from '../messagesSkeletons'
import s from './messages.module.css'

type PropsType = {
	isLoading: boolean
	messages: MessageResponseType[]
}

export const Messages = memo(({ isLoading, messages }: PropsType) => {
	const { ref } = useSmoothAppearance()

	const { userId: urlId = 0 } = useParams()

	return (
		<div className={s.flexbox} ref={ref}>
			{isLoading ? (
				<MessagesSkeletons />
			) : messages?.length > 0 ? (
				messages.map(({ id, ...message }, index) => (
					<div key={id}>
						{!checkSameToPrevious(index, messages) && (
							<TimeChip time={formattedToMMMM_D(message.addedAt)} />
						)}
						{/*    comparing sender id with id in url, if it's not equal -> me = true*/}
						<Message {...message} me={message.senderId + '' !== urlId} />
					</div>
				))
			) : (
				<Div>Enter your first message</Div>
			)}
		</div>
	)
})
