import { Chip, Divider } from '@mui/material'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { Div } from '@/shared/ui/div/div.tsx'
import { useRequestMessagesQuery } from '../../api/api.ts'
import { MessageResponseType } from '../../api/types.ts'
import s from './messages.module.css'
import { Message } from '@/components/dialogs/entities/message'

export const Messages = () => {
	const { userId = 0 } = useParams()

	const { data, isFetching, isError } = useRequestMessagesQuery(
		{ id: +userId },
		{ skip: !userId }
	)

	const messages = data?.items

	// const { ref } = useScrollIntoView(messages)

	const fromNow = (addedAt: string) => dayjs(addedAt).fromNow()

	const isExist = (message: MessageResponseType, index: number) => {
		return !!messages?.find((mes, i) => {
			if (index === i) return

			return fromNow(mes.addedAt) === fromNow(message.addedAt)
		})
	}

	return (
		<WithLoading isLoading={isFetching}>
			<WithError isError={isError}>
				<div className={s.flexbox}>
					{messages && messages.length > 0 ? (
						messages.map((message, index) => {
							return (
								<div className={s.mesContainer} key={message.id}>
									<Message {...message} me={message.senderId !== userId} />
									{!isExist(message, index) && (
										<Divider sx={{ mb: '10px', textTransform: 'none' }}>
											<Chip
												color={'primary'}
												label={fromNow(message.addedAt)}
											/>
										</Divider>
									)}
								</div>
							)
						})
					) : (
						<Div>Enter your first message</Div>
					)}
					{/*<div ref={ref} />*/}
				</div>
			</WithError>
		</WithLoading>
	)
}
