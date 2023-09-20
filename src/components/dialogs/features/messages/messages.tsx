import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { useChatSlice, useIsDateExist } from '../../model/hooks'
import { Message } from '../../entities/message'
import { TimeChip } from '../../entities/timeChip'
import { MessagesSkeletons } from '../messagesSkeletons'
import s from './messages.module.css'

type PropsType = {
	isLoading: boolean
}

const animations = {
	initial: { scale: 0.5 },
	animate: { scale: 1 },
	exit: { opacity: 0 },
	transition: { type: 'spring', stiffness: 65, bounce: 0.25, duration: 0.2 },
} as const

export const Messages = memo(({ isLoading }: PropsType) => {
	const { ref } = useSmoothAppearance()
	const { userId: urlId = 0 } = useParams()

	const { formattedToMMMM_D, isDateExist } = useIsDateExist()

	const { messages } = useChatSlice()

	return (
		<div className={s.flexbox} ref={ref}>
			{isLoading ? (
				<MessagesSkeletons />
			) : messages && messages.length > 0 ? (
				<AnimatePresence>
					{messages.map(({ id, ...message }) => (
						<motion.div key={id} {...animations}>
							{!isDateExist(message.addedAt) && (
								<TimeChip time={formattedToMMMM_D(message.addedAt)} />
							)}
							{/*        comparing sender id with id in url, if its not equal me = true*/}
							<Message {...message} me={message.senderId !== +urlId} />
						</motion.div>
					))}
				</AnimatePresence>
			) : (
				<Div>Enter your first message</Div>
			)}
		</div>
	)
})
