import { memo } from 'react'
import { WithError, WithLoading } from '@/shared/hoc'
import { useScroll, useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div/div.tsx'
import { Message } from '../../entities/message'
import { TimeChip } from '../../entities/timeChip'
import s from './messages.module.css'
import { useMessagesRequest } from '@/components/dialogs/model/hooks'
import { useIsDateExist } from '@/components/dialogs/model/hooks/useIsDateExist.ts'

export const Messages = memo(() => {
	const { messagesData, isFetching, isError, urlId } = useMessagesRequest()

	const messages = messagesData?.items

	const { ref } = useSmoothAppearance(!isFetching)

	const { formattedToMMMM_D, isDateExist } = useIsDateExist()

	const scroll = useScroll()

	return (
		<div className={s.flexbox + ' scroll'} ref={ref} {...scroll}>
			<WithLoading isLoading={isFetching}>
				<WithError isError={isError}>
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
				</WithError>
			</WithLoading>
		</div>
	)
})
