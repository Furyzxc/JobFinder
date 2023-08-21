import { memo } from 'react'
import { useScroll, useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { MessageResponseType } from '../../api/types.ts'
import { Message } from '../../entities/message'
import { TimeChip } from '../../entities/timeChip'
import { useIsDateExist } from '../../model/hooks'
import s from './messages.module.css'

type PropsType = {
	messages: MessageResponseType[] | undefined
	urlId: number
}

export const Messages = memo(({ messages, urlId }: PropsType) => {
	const { ref } = useSmoothAppearance()

	const { formattedToMMMM_D, isDateExist } = useIsDateExist()

	const scroll = useScroll()

	return (
		<div className={s.flexbox + ' scroll'} ref={ref} {...scroll}>
			{messages && messages.length > 0 ? (
				messages.map(({ id, ...message }) => {
					return (
						<div key={id}>
							{!isDateExist(message.addedAt) && (
								<TimeChip time={formattedToMMMM_D(message.addedAt)} />
							)}
							{/*        comparing sender id with id in url, if its not equal me = true*/}
							<Message {...message} me={message.senderId !== urlId} />
						</div>
					)
				})
			) : (
				<Div>Enter your first message</Div>
			)}
		</div>
	)
})
